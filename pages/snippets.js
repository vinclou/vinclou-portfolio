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
  Link
} from '@chakra-ui/layout';
// wrappers & components
import { Container } from '@/layouts/container';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { getAllFiles } from '@/lib/filesModule';
import { SectionHeading } from '@/components/section-heading';
// hooks
// import { useToggle } from '@/utils/hooks/useToggle';
import { useColorModeSwitcher } from '@/hooks/useColorModeSwitcher';

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
function CodeSnippetCard({ title, description, slug, logo, props }) {
  const { colorGrey } = useColorModeSwitcher();

  return (
    <NextLink href={`snippets/${slug}`} passHref>
      <Link variant="blogPost">
        <VStack
          alignItems="left"
          p="0.5rem"
          border="1px solid"
          borderColor={colorGrey}
          w={{ base: '20rem' }}
          {...props}
        >
          <Heading as="h4" variant="h4" variant="pretitle">
            {title}
          </Heading>
          <Text variant="bodyLight" alignSelf="center">
            {description}
          </Text>
        </VStack>
      </Link>
    </NextLink>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFiles('snippets');

  return { props: { snippets } };
}
