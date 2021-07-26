import React from 'react';
import { Container } from '@/layouts/container';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { useMediaQuery } from '@chakra-ui/media-query';
import {
  Box,
  Button,
  Heading,
  Flex,
  List,
  VStack,
  Text
} from '@chakra-ui/react';

import { getAllFiles } from '@/utils/mdx';

import { Subscribe } from '@/components/subscribe';
import { BlogPost } from '@/components/blog-post';
// data imports

// //TODO make all the needed components
export default function Blog({ posts }) {
  // console.log(postFilePaths);
  // console.log(POSTS_PATH);
  // console.log(posts);
  // console.log(posts[0].data);
  return (
    <Container title="Blog | Vincent Arlou">
      <ContentWrapper>
        <Heading as="h2" textAlign="center" variant="h2">
          Blog
        </Heading>
        {posts.map((post) => (
          <BlogPost key={post.data.title} {...post.data} />
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
