import React from 'react';
import NextLink from 'next/link';

import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  Link,
  List,
  ListItem
} from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/icons';

import { Container } from '@/layouts/container';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { getAllFiles } from '@/lib/filesModule';
import { SectionHeading } from '@/components/section-heading';

import { useColorModeSwitcher } from '@/hooks/useColorModeSwitcher';
import * as allTools from '@/data/tools';

export default function Snippets({ snippets }) {
  return (
    <Container
      title="Snippets | Vincent Arlou"
      description="A collection of useful code snippets, to ease the development of your products"
    >
      <ContentWrapper>
        <VStack
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
          <VStack mb={{ base: '1rem', md: '3rem' }}>
            <SectionHeading mb="2rem">Snippets</SectionHeading>
            <Text w={{ base: '90%', md: '80%' }} color="neutral.600">
              {`
              This is my collection of snippets, I also plan to feature snippets
              of other people here, hopefully a rich library of interesting
              solutions! Let's feed Github's copilot with some data 🍄
              `}
            </Text>
          </VStack>

          <SimpleGrid
            as="section"
            columns={{ base: 1, md: 2 }}
            spacingX={{ base: '20px', md: '60px' }}
            spacingY="25px"
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
        </VStack>
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
  // Get all available tools from the tools data file
  const tools = Object.values(allTools);
  
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