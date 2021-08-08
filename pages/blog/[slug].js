/**
 *  TODO: next-mdx-remote is not a library I want to use
 *  it's not working right out of the box, and I still can't move function
 *  from getStaticProps to its own mdx dedicated utility file,
 *  that's so annoying.
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { Container } from '@/layouts/container';
import {
  Flex,
  Box,
  Heading,
  Text,
  Divider,
  Spacer,
  VStack
} from '@chakra-ui/react';

import { postFilePaths, POSTS_PATH } from '@/utils/mdx';
import MDXComponents from '@/components/mdx-components';

/**
 * This is individual blog page
 * Accepts: { source } ---> MDXRemote object
 *          { frontMatter } ---> file data and extras
 */
export default function BlogPage({ source, frontMatter, otherData }) {
  /* A Neat Way To Extend Components withing this file, useful if any props data  is needed */
  const extendMdxComponents = {
    ...MDXComponents,
    SectionWrapper: (props) => {
      return (
        <Box
          as="section"
          m="auto"
          maxW={{
            sm: '30rem',
            md: '40rem',
            lg: '50rem',
            xl: '60rem',
            '2xl': '60rem'
          }}
          {...props}
        >
          {props.children}
        </Box>
      );
    },
    GlobalWrapper: (props) => {
      return <Box w={{ base: '80%', '2xl': '90%' }} {...props} />;
    },
    ExtensionComponentExp: () => {
      return <div>{JSON.stringify(otherData)}</div>;
    }
  };

  return (
    <Container title={frontMatter.title.concat(' | Vincent Arlou')}>
      <ContentWrapper as="article">
        {/* ARTICLE HEADER */}
        <VStack as="section" w={{ base: '90%', '2xl': '95%' }}>
          <Box textAlign="center">
            <Heading textTransform="capitalize" variant="blogTitle" mb="1.0rem">
              {frontMatter.title}
            </Heading>
            <Heading textTransform="capitalize" variant="subtitle" mb="1.3rem">
              {frontMatter.description}
            </Heading>
            <Divider mb="0.2rem" />

            <Flex w="inherit" justifyContent="space-between">
              <Spacer />
              <Text
                variant="bodyLight"
                borderBottom="1px"
                borderBottomColor="neutral.700"
                borderBottomRadius="4px"
              >
                {frontMatter.readingTime.text}
                {'   '}
                {frontMatter.date}
              </Text>
            </Flex>
          </Box>
        </VStack>
        {/* MDX CONTEXT */}
        <MDXRemote {...source} components={extendMdxComponents} />
      </ContentWrapper>
    </Container>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
          {
            linkProperties: {
              className: ['anchor']
            }
          }
        ],
        require('remark-code-titles')
      ],
      rehypePlugins: [mdxPrism]
    },
    scope: data
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        wordCount: content.split(/\s+/gu).length,
        readingTime: readingTime(content),
        slug: params.slug || null,
        ...data
      },
      otherData: [
        { x: 1, y: 1 },
        { x: 3, y: 5 },
        { x: 32, y: 32 }
      ]
    }
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};
