import React from 'react';
import { Container } from '@/layouts/container';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { useColorModeSwitcher } from 'hooks/useColorModeSwitcher';

import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  VStack,
  Flex
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

import { getAllFiles } from '../lib/filesModule';

import { Subscribe } from '@/components/subscribe';
import { BlogPost } from '@/components/blog-post';

// TODO: Build A Better Search System, make filters, search by keywords and so on
// Manage Infinite scroll
export default function Blog({ posts }) {
  const { themed } = useColorModeSwitcher();
  const [query, setQuery] = React.useState('');

  const filteredPosts = posts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase()) ||
        post.keywords.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <Container title="Blog | Vincent Arlou">
      <ContentWrapper>
        <VStack w={{ base: '80%', md: '40%' }} mx="1rem">
          <InputGroup>
            <Input
              aria-label="Search by post title, summary, or keywords"
              placeholder="Search by post title, summary, or keywords"
              onChange={(e) => setQuery(e.target.value)}
            />
            <InputRightElement>
              <SearchIcon color="gray.300" />
            </InputRightElement>
          </InputGroup>
          <Link p="1rem" variant="subtle" href="https://google.com">
            If you can't find what you're looking for with this, try using
            Google.
          </Link>
        </VStack>

        {!filteredPosts.length && (
          <Text
            variant="preTitle"
            border="0.3px solid"
            borderRadius="3px"
            color={themed}
          >
            No posts found
          </Text>
        )}
        <Flex
          w={{ base: 'inherit', md: '90%' }}
          mx="auto"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {filteredPosts.map((post) => (
            <article key={post.title}>
              <BlogPost slug={post.slug} {...post} />
            </article>
          ))}
        </Flex>
        <Subscribe />
      </ContentWrapper>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFiles('posts');

  return { props: { posts } };
}
