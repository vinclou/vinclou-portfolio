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

// move this function to utils
const getSlug = (filePath) => {
  const spt = filePath.split('.');
  return spt[0];
}

export default function Blog({ posts }) {

  return (
    <Container title="Blog | Vincent Arlou">
      <ContentWrapper>
        <Heading variant="h1" textAlign="center">
          Blog
        </Heading>
        {posts.map((post) => (
            <BlogPost
              key={post.data.title.concat(post.data.date)}
              slug={getSlug(post.filePath)}
              {...post.data}
            />
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
