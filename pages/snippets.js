import React from 'react';
import NextLink from 'next/link';
// chakra
import {
  Heading,
  Box,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  Link,
  List,
  ListItem
} from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/icons';
// wrappers & components
import { Container } from '@/layouts/container';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { getAllFiles } from '@/lib/filesModule';
import { SectionHeading } from '@/components/section-heading';
// hooks
// import { useToggle } from '@/utils/hooks/useToggle';
import { useColorModeSwitcher } from '@/hooks/useColorModeSwitcher';
// import { v4 as uuidv4 } from 'uuid';
import { react, js } from '@/data/tools';

export default function Snippets({ snippets }) {
  return (
    <Container
      title="Snippets | Vincent Arlou"
      description="A collection of useful code snippets, to ease the development of your products"
    >
      <ContentWrapper>
        <Box
          as="article"
          title="check out these snippets"
          w={{
            base: '22rem',
            md: '40rem',
            lg: '50rem',
            xl: '60rem',
            '2xl': '60rem'
          }}
        >
          <SectionHeading mb="2rem">Snippets</SectionHeading>
          <Text mb="4rem" color="neutral.500">
            {`
            This is my collection of snippets, I also plan to feature snippets
            of other people here, hopefully a rich library of interesting
            solutions! Let's feed Github's copilot with more of our data ;)
            `}
          </Text>
          <SimpleGrid
            as="section"
            columns={{ base: 1, md: 2 }}
            spacingX="20px"
            spacingY="20px"
          >
            {snippets.map((snippet) => (
              <GridItem key={snippet.slug}>
                <CodeSnippetCard
                  title={snippet.title}
                  description={snippet.description}
                  slug={snippet.slug}
                  tools={snippet.tools ? snippet.tools : ''}
                  logo={snippet.logo ? snippet.logo : ''}
                />
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
      </ContentWrapper>
    </Container>
  );
}

// TODO: include logo, and convert it to a link component
// .     figure out how would you do dynamic imports having mdx meta data
function CodeSnippetCard({ title, description, slug, tools, logo, props }) {
  const { colorGrey } = useColorModeSwitcher();

  return (
    <NextLink href={`/snippets/${slug}`} passHref>
      <Link variant="blogPost">
        <VStack
          alignItems="left"
          p="1.0rem"
          border="1px solid"
          borderColor={colorGrey}
          w={{ base: '20rem' }}
          {...props}
        >
          <Heading as="h4" variant="h4" variant="pretitle">
            {title}
          </Heading>

          <Text variant="bodyLight">
            {description}
            <ToolStack toolsArr={tools} />
          </Text>
        </VStack>
      </Link>
    </NextLink>
  );
}

// TODO: make it a standalone comp
function ToolStack({ toolsArr }) {
  // make an arr of data
  const tools = [js, react];
  // callback filter function
  const filterByName = (tool) => {
    return toolsArr.includes(tool.name);
  };
  // filtered return tools
  let filteredTools = tools.filter(filterByName);
  // console.log('Filtered items:', filteredTools);

  return (
    <List display="flex" flexDirection="row">
      {filteredTools.map((tool) => (
        <ListItem key={tool.id} p="0.5rem">
          <Icon
            as={tool.icon}
            aria-label={tool.name}
            transitionDuration="300ms"
            boxSize="1.5rem"
            color={tool.color}
            // _hover={{ fill: 'default.light' }}
          />
        </ListItem>
      ))}
    </List>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFiles('snippets');

  return { props: { snippets } };
}
