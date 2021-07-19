import React from 'react';
// chakra
import {
  Box,
  HStack,
  Heading,
  Text,
  Container as ChakraContainer,
  Grid,
  GridItem,
  Link,
  Flex
} from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/icon';
// wrappers
import { Container } from '@/layouts/container';
import { ContentWrapper } from '@/layouts/contentWrapper';
// hooks
import { useToggle } from '@/utils/hooks/useToggle';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
// data
import { github, linkedin } from '@/data/socials';

export default function About() {
  return (
    <Container title="About | Vincent Arlou">
      <ContentWrapper>
        <Intro />
        <Skills />
        <Contact />
      </ContentWrapper>
    </Container>
  );
}

/* MODULES TODO: seperate them */
const Intro = () => {
  return (
    <Box as="section">
      <SectionHeading>About</SectionHeading>
      <Heading>Background</Heading>
      <ChakraContainer
        maxW={{ base: '20rem', sm: '30rem', md: '40rem' }}
        p={0.5}
      >
        <Text>General Background 1</Text>
        <Text>General Background 2</Text>
        <Text>General Background 3</Text>
        <Heading>What I am I doing?</Heading>
        <Text>Experiences 1</Text>
        <Text>Experiences 2</Text>
        <Text>Experiences 3</Text>
        <Heading>Interests</Heading>
        <Text>Interests 1</Text>
        <Text>Interests 2</Text>
        <Text>Interests 3</Text>
      </ChakraContainer>
    </Box>
  );
};

const Skills = () => {
  return <Box>Skills</Box>;
};

const Contact = () => {
  return <Box>Contact Me</Box>;
};

const SectionHeading = ({ children, ...props }) => {
  const { colorGrey } = useColorModeSwitcher();
  return (
    <HStack {...props} w="100%">
      <Box flex="1" h="1px" bg={colorGrey} />
      <Heading textAlign="center" px="1rem" as="h3" variant="h3">
        {children}
      </Heading>
      <Box flex="1" h="1px" bg={colorGrey} />
    </HStack>
  );
};
