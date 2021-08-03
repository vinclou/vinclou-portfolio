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
        AspectRatio,
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
          mx="auto"
          p="1rem"
          border="1px solid"
          borderColor={colorGrey}
          minW="340px"
          w={{ base:"20rem", lg: '50rem', }}
        >
          <HStack justifyContent="start" mb="1.5rem">
            <Heading textTransform="capitalize" variant="h1" >
              {title}
            </Heading>
            <Divider />
            <Text alignSelf="end" variant="subtitle">{date}</Text>
          </HStack>
          <BannerImg bannerSrc={bannerUrl}/>
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
      </Link>
    </NextLink>
  );
};


const BannerImg = ({ bannerSrc }) => {
  return(
    <AspectRatio maxW="40rem" maxH="15rem" ratio={4/3}>
      <Img src={bannerSrc} />
    </AspectRatio>
  )
}

export { BlogPost };
