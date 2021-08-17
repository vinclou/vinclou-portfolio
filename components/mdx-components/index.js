/** @jsxRuntime classic */
/** @jsx jsx */
// TODO: complete the designs for all MDX components
import React from 'react';
import NextLink from 'next/link';
import { jsx } from '@emotion/react';
import {
  Box,
  Alert,
  Code,
  Heading,
  Link,
  Text,
  Divider,
  SimpleGrid,
  GridItem,
  Flex
} from '@chakra-ui/react';
import { Img } from '@/components/next-responsive-img';
import { useColorModeSwitcher } from '@/hooks/useColorModeSwitcher';
import { useMediaQuerySSR } from '@/hooks/useMediaQuerySSR';

// TODO: These are stock styles, replace it with my own!!!
const CustomLink = (props) => {
  const { themed } = useColorModeSwitcher();
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={themed} {...props} />
      </NextLink>
    );
  }

  return <Link color={themed} isExternal {...props} />;
};

const Quote = (props) => {
  const { themed } = useColorModeSwitcher();

  return (
    <Alert
      mt={4}
      w="98%"
      bg={themed}
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8
        }
      }}
      {...props}
    />
  );
};

const Hr = () => {
  const { colorDark } = useColorModeSwitcher();

  return <Divider borderColor={colorDark} my={4} w="100%" />;
};

// https://www.asciiart.eu/art-and-design/dividers
// ----------------8<-------------[ cut here ]------------------
// 6969696969696969696969696969696969696969696969696969696969696
// ^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^
// AVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVA
/*
        .--.      .-'.      .--.      .--.      .--.      .--.      .`-.      .--.
    :::::.\::::::::.\::::::::.\::::::::.\::::::::.\::::::::.\::::::::.\::::::::.\
    '      `--'      `.-'      `--'      `--'      `--'      `-.'      `--'      `
*/
/*
  This is a custom divider I would like to make
  https://stackoverflow.com/questions/28161374/how-to-make-a-dynamic-ascii-horizontal-divider
  Check this link for possible solutions, it would also be a cool lib to make.

  You should pass string to children
  TODO: make it a universal standalone component
 */
const AsciiHr = ({ children, ...props }) => {
  const { themed, colorDark } = useColorModeSwitcher();
  const [isSmall] = useMediaQuerySSR('(max-width: 500px)');
  const fontS = isSmall ? '13px' : '15px';
  // bg={colorGrey} />
  return (
    <Flex
      w="100%"
      mx="auto"
      my="1rem"
      color={colorDark}
      fontSize={fontS}
      // alignContent={isSmall ? 'initial' : 'end'}
      {...props}
    >
      {/* <Box flex="1" h="0px" visibility={isSmall ? 'hidden' : 'visible'} />
      <Box flex="1" h="0px" visibility={isSmall ? 'hidden' : 'visible'} /> */}
      <Box flex="1" h="3px" visibility={isSmall ? 'hidden' : 'visible'} />
      <pre
        css={{
          alignSelf: 'end',
          fontFamily: 'Iosevka',
          textAlign: 'justify',
          '&:hover': {
            color: 'lightgreen'
          }
        }}
      >
        {/* {children} */}
        {'----------------8<-------------[ cut here ]------------------'}
      </pre>
    </Flex>
  );
};
// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const MDXComponents = {
  // headings
  h1: (props) => <Heading as="h1" variant="blogTitle" {...props} />,
  h2: (props) => <Heading as="h2" variant="h2" {...props} />,
  h3: (props) => <Heading as="h3" mb="2rem" variant="subtitle" {...props} />,
  h4: (props) => <Heading as="h4" mb="2rem" variant="pretitle" {...props} />,
  h5: (props) => <Heading as="h5" mb="2rem" variant="h5" {...props} />,
  h6: (props) => <Heading as="h6" mb="2rem" variant="h6" {...props} />,
  p: (props) => <Text as="p" variant="body" {...props} />,
  code: (props) => <code {...props} />,
  inlineCode: (props) => <Code {...props} />,
  br: (props) => <Box height="14px" {...props} />,
  hr: Hr,
  a: CustomLink,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
  blockquote: Quote,
  // img: (props) => <Img {...props} />,
  NextImg: (props) => <Img {...props} />,

  AsciiHr: (props) => <AsciiHr {...props} />,

  Grid: (props) => {
    return (
      <SimpleGrid
        as="section"
        columns={{ base: 1, md: 2 }}
        spacingX="20px"
        spacingY="20px"
        {...props}
      >
        {props.children}
      </SimpleGrid>
    );
  },

  GridElement: (props) => {
    return <GridItem {...props}>{props.children}</GridItem>;
  },

  SectionWrapper: (props) => {
    return (
      <Box
        as="section"
        m="auto"
        mb="2rem"
        maxW={{
          sm: '30rem',
          md: '40rem',
          lg: '50rem',
          xl: '60rem',
          '2xl': '60rem'
        }}
        {...props}
      >
        {props.children}
      </Box>
    );
  },
  GlobalWrapper: (props) => {
    return <Box w={{ base: '80%', '2xl': '90%' }} overflow="auto" {...props} />;
  }
};

export default MDXComponents;
