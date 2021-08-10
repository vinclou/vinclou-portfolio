// TODO add credits section
import {
  Box,
  Link,
  Heading,
  Flex,
  VStack,
  HStack,
  Divider,
  Text,
  Img,
  AspectRatio
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';

// TODO: MANAGE meta data for seo -> keywords, bannerCredit, title and all
//       Fix styles
const BlogPost = ({
  slug,
  title,
  date,
  description,
  keywords,
  bannerUrl,
  bannerCredit
}) => {
  const { colorGrey } = useColorModeSwitcher();
  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link variant="blogPost">
        <Box
          as="section"
          mx="auto"
          p="1rem"
          border="1px solid"
          borderColor={colorGrey}
          w={{
            base: '22rem',
            sm: '22rem',
            md: '30rem',
            lg: '40rem',
            xl: '50rem',
            '2xl': '50rem'
          }}
        >
          <HStack as="section" justifyContent="start" mb="1.5rem">
            <Heading textTransform="capitalize" variant="h1">
              {title}
            </Heading>
            <Divider />
            <Text alignSelf="end" variant="subtitle">
              {date}
            </Text>
          </HStack>

          <BannerImg bannerSrc={bannerUrl} />

          <Box as="section" p={3}>
            <Text variant="body" mb="2rem">
              {description}
            </Text>
            <Flex>
              <Text> Read More </Text>
              <Text>
                {' '}
                <span>→</span>
              </Text>
            </Flex>
          </Box>
        </Box>
      </Link>
    </NextLink>
  );
};

const BannerImg = ({ bannerSrc }) => {
  return (
    <AspectRatio
      maxW={{ base: '20rem', lg: '30rem' }}
      maxH="15rem"
      mb="1.5rem"
      ratio={4 / 3}
    >
      <Img src={bannerSrc} />
    </AspectRatio>
  );
};

export { BlogPost };
