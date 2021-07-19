import React from 'react';
// chakra
import { Box, HStack } from '@chakra-ui/layout';
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
  return <Box>Intro</Box>;
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
      <Box flex="1" h="1.5px" bg={colorGrey} />
    </HStack>
  );
};
