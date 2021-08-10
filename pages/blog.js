import React from 'react';
import { Container } from '@/layouts/container';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { useColorModeSwitcher } from '@/hooks/useColorModeSwitcher';

import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  VStack
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

import { getAllFiles } from '@/utils/mdx';

import { Subscribe } from '@/components/subscribe';
import { BlogPost } from '@/components/blog-post';

// move this function to utils
const getSlug = (filePath) => {
  const spt = filePath.split('.');
  return spt[0];
};
// TODO: Build A Better Search System, make filters, search by keywords and so on
// Manage Infinite scroll
export default function Blog({ posts }) {
  const { themed } = useColorModeSwitcher();
  const [query, setQuery] = React.useState('');
  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter(
      (post) =>
        post.data.title.toLowerCase().includes(query.toLowerCase()) ||
        post.data.description.toLowerCase().includes(query.toLowerCase()) ||
        post.data.keywords.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <Container title="Blog | Vincent Arlou">
      <ContentWrapper>
        <VStack
          w={{
            base: '22rem',
            sm: '22rem',
            md: '30rem',
            lg: '40rem',
            xl: '50rem',
            '2xl': '50rem'
          }}
        >
          <InputGroup>
            <Input
              aria-label="Search by post title, summary, or keywords"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by post title, summary, or keywords"
            />
            <InputRightElement>
              <SearchIcon color="gray.300" />
            </InputRightElement>
          </InputGroup>
          <Link variant="subtle" href="https://google.com">
            If you can't find what you're looking for with this, try using
            Google.
          </Link>
        </VStack>
        {!filteredBlogPosts.length && (
          <Text
            variant="preTitle"
            border="0.3px solid"
            borderRadius="3px"
            color={themed}
          >
            No posts found
          </Text>
        )}
        {filteredBlogPosts.map((post) => (
          <article key={post.data.title}>
            <BlogPost slug={getSlug(post.filePath)} {...post.data} />
          </article>
        ))}
        <Subscribe />
      </ContentWrapper>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getAllFiles();

  return { props: posts };
}
