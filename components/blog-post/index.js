// TODO add credits section
import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Link,
  Heading,
  Flex,
  // VStack,
  HStack,
  Divider,
  Text,
  // Img,
  Spacer
} from '@chakra-ui/react';
import { Img } from '@/components/next-responsive-img';
import { useColorModeSwitcher } from '@/hooks/useColorModeSwitcher';

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

  const parseDate = (d) => {
    // I am formatting --> this string "Thu Jan 01 1970".
    const string = d.toDateString();
    // look for the first space
    const index = string.indexOf(' ');
    // so now the date is Jan 01 1970
    return string.slice(index);
  };

  return (
    <NextLink href={`/blog/${slug}`} passHref>
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
            <Spacer />
            <Text alignSelf="end" variant="subtitle">
              {parseDate(new Date(date))}
            </Text>
          </HStack>

          <Img
            maxW={{ base: '20rem', lg: '30rem' }}
            maxH="15rem"
            src={`/${bannerUrl}`}
          />

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

// const BannerImg = ({ bannerSrc }) => {
//   return (
//     <AspectRatio
//       maxW={{ base: '20rem', lg: '30rem' }}
//       maxH="15rem"
//       mb="1.5rem"
//       ratio={4 / 3}
//     >
//       <Img src={bannerSrc} />
//     </AspectRatio>
//   );
// };

export { BlogPost };
