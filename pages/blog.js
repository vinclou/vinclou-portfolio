import { Container } from '@/layouts/container';
import { Heading, Link, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { ContentWrapper } from '@/layouts/contentWrapper';

const Blog = () => {
  return (
    <Container title="Blog | Vincent Arlou">
      <ContentWrapper>
        <Heading as="h1" variant="h2">
          Blog 🖊
        </Heading>
        <Text>
          This page will soon be my{' '}
          <Link href="https://joelhooks.com/digital-garden">
            digital garden
          </Link>{' '}
          <span>🌱</span>
        </Text>
        <Text>
          It will be home to all of my thoughts and ideas around
          <br /> web develoment and design.{' '}
        </Text>
      </ContentWrapper>
    </Container>
  );
};

export default Blog;
