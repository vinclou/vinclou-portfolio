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

import MDXComponents from '@/components/mdx-components';
import { getFiles } from '../../lib/filesModule';
import { getFileBySlug } from '@/utils/mdx';

export default function NewsletterPage({ mdxSource, frontMatter }) {
  /*
		 A Neat Way To Extend Components withing this file,
		 useful if any props data is needed,
		 and useful for passing wrappers and layout elements.
	 */
  const extendMdxComponents = {
    ...MDXComponents,
    ExtensionComponentExp: () => {
      return <div>{JSON.stringify(otherData)}</div>;
    }
  };

  return (
    <Container
      title={frontMatter.title.concat(' | Vincent Arlou')}
      description={frontMatter.description}
      // image would be hard to work with, if you don't host it yourself
      // use commented line below if image is hosted by you
      // image={`https://vincentarlou.com${frontMatter.bannerUrl}`}
      // else you this one if you do not host it
      image={`${frontMatter.bannerUrl}`}
      date={new Date(frontMatter.date).toISOString()}
      type="article"
    >
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
        <MDXRemote {...mdxSource} components={extendMdxComponents} />
      </ContentWrapper>
    </Container>
  );
}

export async function getStaticPaths() {
  const news = await getFiles('newsletter');

  return {
    paths: news.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const news = await getFileBySlug('newsletter', params.slug);

  return { props: { ...news } };
}
