import { Box, Link, Heading, Flex, VStack, Text } from '@chakra-ui/react';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';

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
          Will do heading for my blog post
        </Heading>
        <Text variant="body" mb="2rem">
          This is some arbitrary subtitle for my blog post that you should most
          definitely read!
        </Text>
        <Flex>
          <Text>Read more</Text>
          <Text>
            <span>→</span>
          </Text>
        </Flex>
      </Box>
    </VStack>
  );
};

export { ArticleCard };
