// TODO add credits section
import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Link,
  Heading,
  // Flex,
  // VStack,
  // HStack,
  // Divider,
  Text,
  // Img,
  Spacer
} from '@chakra-ui/react';
import { Img } from '@/components/next-responsive-img';
import { useColorModeSwitcher } from '@/hooks/useColorModeSwitcher';
import { useMediaQuerySSR } from '@/hooks/useMediaQuerySSR';

function truncate(str, n, useWordBoundary) {
  if (str.length <= n) {
    return str;
  }
  const subString = str.substr(0, n - 1); // the original check
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(' '))
      : subString) + ' ...'
  );
}

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
  const [isMobile] = useMediaQuerySSR('(max-width: 700px)');
  // const parseDate = (d) => {
  //   // I am formatting --> this string "Thu Jan 01 1970".
  //   const string = d.toDateString();
  //   // look for the first space
  //   const index = string.indexOf(' ');
  //   // so now the date is Jan 01 1970
  //   return string.slice(index);
  // };

  return (
    <NextLink href={`/blog/${slug}`} passHref>
      <Link variant="blogPost">
        <Box
          as="section"
          // alignSelf={isMobile ? 'center' : 'auto'}
          mx={{ base: '0rem', md: '0.5rem', '2xl': '0.7rem' }}
          p={{ base: '0.5rem', '2xl': '0.2rem' }}
          border="1px solid"
          borderColor={colorGrey}
          // w={{
          //   base: '22rem',
          //   sm: '22rem',
          //   md: '30rem',
          //   lg: '40rem',
          //   xl: '50rem',
          //   '2xl': '50rem'
          // }}
          // fix responsive styles later
          mb="3rem"
          w={{
            base: '360px'
          }}
          h={{
            base: '520px'
          }}
        >
          <Heading textTransform="capitalize" variant="h3" p={3} h="92px">
            {title}
          </Heading>

          <Img
            ratio={4 / 3}
            mx={isMobile ? 'auto' : '2rem'}
            maxW={{ base: '20rem', lg: '30rem' }}
            h="15rem"
            src={`/${bannerUrl}`}
          />

          <Box
            as="section"
            p={3}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Text variant="body" mb="2rem" h="48px">
              {truncate(description, 90, true)}
            </Text>
            <Text variant="bodyLight" position="static" bottom="10%">
              {' '}
              Read More 🐱‍👓
            </Text>
          </Box>
        </Box>
      </Link>
    </NextLink>
  );
};

export { BlogPost };
