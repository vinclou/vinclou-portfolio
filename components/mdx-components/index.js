/** @jsxRuntime classic */
/** @jsx jsx */
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
  useColorMode
} from '@chakra-ui/react';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';

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
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'blue.50',
    dark: 'blue.900'
  };

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
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
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

// ----------------8<-------------[ cut here ]------------------
/*
  This is a custom divider I would like to make
  https://stackoverflow.com/questions/28161374/how-to-make-a-dynamic-ascii-horizontal-divider
  Check this link for possible solutions, it would also be a cool lib to make.
 */
const DivHr = () => {
  return (
    <pre>{'----------------8<-------------[ cut here ]------------------'}</pre>
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
  h3: (props) => <Heading as="h3" variant="subtitle" {...props} />,
  h4: (props) => <Heading as="h4" variant="pretitle" {...props} />,
  h5: (props) => <Heading as="h5" variant="h5" {...props} />,
  h6: (props) => <Heading as="h6" variant="h6" {...props} />,
  // text
  p: (props) => <Text as="p" variant="body" {...props} />,
  // code related
  code: (props) => <code class="javascript" {...props} />,
  inlineCode: (props) => <Code fontSize="0.84em" {...props} />,
  // dividers
  br: (props) => <Box height="14px" {...props} />,
  hr: Hr,
  // link
  a: CustomLink,
  // img TODO: Implement
  // img: (props) => <Image />
  // list
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
  // quotes
  blockquote: Quote
};

export default MDXComponents;
