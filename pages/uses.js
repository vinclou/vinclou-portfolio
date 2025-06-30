import React from 'react';
// chakra
import { Box } from '@chakra-ui/layout';
import { Container } from '@/layouts/container';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { getFileBySlug } from '@/utils/mdx';
import { SectionHeading } from '@/components/section-heading';
import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '@/components/mdx-components';

export default function Uses({ mdxSource, _ }) {
  // console.log(frontMatter);
  return (
    <Container title="Vincent Arlou | Uses">
      <ContentWrapper as="article">
        <Box as="section" title="tools" w={{ base: '90%', '2xl': '95%' }}>
          <SectionHeading> Uses </SectionHeading>
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </Box>
      </ContentWrapper>
    </Container>
  );
}

export async function getStaticProps() {
  const uses = await getFileBySlug('uses');

  return { props: uses };
}
