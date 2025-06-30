import React from 'react';
import NextLink from 'next/link';
import { Box, Text, Heading, VStack, Link } from '@chakra-ui/react';
// wrappers & components
import { Container } from '@/layouts/container';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { SectionHeading } from '@/components/section-heading';
import { Subscribe } from '@/components/subscribe';
// handle mdx
// import { getAllFiles } from '@/utils/mdx';
import { getAllFiles } from '../lib/filesModule';

// hooks
// import { useToggle } from '@/utils/hooks/useToggle';
// import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';

export default function Newsletter({ news }) {
  return (
    <Container
      title="Vincent Arlou | Newsletter"
      description="Thoughts on the software industry, programming, tech, and my personal life."
    >
      <ContentWrapper>
        <Box as="section" maxW={{ base: '20rem', sm: '30rem', md: '40rem' }}>
          <SectionHeading mb="4.5rem">Newsletter</SectionHeading>
          <Box p={0.5}>
            <Text mb="2rem">
              My newsletter provides a behind-the-scenes look into what I'm
              working on and writing about. I frequently share some of my
              favorite articles I've read, as well as anything fascinating about
              technology.
            </Text>
            <Subscribe />
          </Box>
          <Heading mb="0.5rem" as="h2" variant="h2">
            Archive
          </Heading>
          <VStack alignItems="left">
            {news
              .sort(
                (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
              )
              .map((item) => (
                <NextLink
                  key={item.title}
                  href={`newsletter/${item.slug}`}
                  passHref
                >
                  <Link variant="default">{item.date}</Link>
                </NextLink>
              ))}
          </VStack>
        </Box>
      </ContentWrapper>
    </Container>
  );
}

export async function getStaticProps() {
  const news = await getAllFiles('newsletter');

  return { props: { news } };
}
