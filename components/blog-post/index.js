import { Box, Link, Heading, Flex, VStack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { StyledLink } from '@/components/styled';
// import { StyledLink } from '@/components/styled';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';

// THIS is a blog Post card
const BlogPost = ({ title, publishedAt, description, slug }) => {
  const { colorGrey } = useColorModeSwitcher();
  return (
    // <NextLink href={`blog/${slug}`} passHref>
    // <Link w="100%" _hover={{ textDecoration: 'none' }}>
    // </Link>
    // </NextLink>
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box
          mx="auto"
          p="2rem"
          border="2px solid"
          borderColor={colorGrey}
          w={{ base: '21em', lg: '57.5rem' }}
        >
          <Heading textTransform="capitalize" as="h4" variant="h4" mb="0.5rem">
            {title}
          </Heading>
          <Text variant="body" mb="2rem">
            {description}
          </Text>
          <Flex>
            <Text> Read More </Text>
            <Text>
              {' '}
              <span>→</span>
            </Text>
            {/* MIght now be the ideal way to deal with the date like this*/}
            <Text>{publishedAt}</Text>
          </Flex>
        </Box>
      </Link>
    </NextLink>
  );
};

export { BlogPost };
