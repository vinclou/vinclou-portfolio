import { Box, Link, Heading, Flex, VStack, Text } from '@chakra-ui/react';
import { useColorModeSwitcher } from '@/hooks/useColorModeSwitcher';
import NoSsr from '@/utils/NoSsr';
import NextLink from 'next/link';

const ArticleCard = () => {
  const { colorGrey } = useColorModeSwitcher();

  return (
    <VStack spacing="4rem" w="100%" mx="auto">
      <Box
        mx="auto"
        p="2rem"
        border="2px solid"
        borderColor={colorGrey}
        w={{ base: '21em', lg: '57.5rem' }}
      >
        <Heading textTransform="capitalize" as="h4" variant="h4" mb="0.5rem">
          Try Reading Latest Blog - Analytics
        </Heading>
        <Text variant="body" mb="2rem">
          Counter.dev - choosing privacy first analytics tools for your website
          or blog
        </Text>
        <NoSsr>
          <NextLink href={`/blog/analytics`} passHref>
            <Link variant="blogPost">
              <Flex>
                <Text>Read more</Text>
                <Text>
                  <span>→</span>
                </Text>
              </Flex>
            </Link>
          </NextLink>
        </NoSsr>
      </Box>
    </VStack>
  );
};

export { ArticleCard };
