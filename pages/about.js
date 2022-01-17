import React from 'react';
import {
  Box,
  HStack,
  Heading,
  Text,
  Grid,
  GridItem,
  Link,
  Flex
} from '@chakra-ui/layout';

import { Icon } from '@chakra-ui/icon';
// wrappers & components
import { Container } from '@/layouts/container';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { ContactForm } from '@/components/contact-form';
// hooks
import { useToggle } from '@/hooks/useToggle';
import { useColorModeSwitcher } from 'hooks/useColorModeSwitcher';
// data
import { github, linkedin } from '@/data/socials';
import * as tool from '@/data/tools'; // feel like * need to refactor this file for a better import

export default function About() {
  return (
    <Container title="Vincent Arlou | About">
      <ContentWrapper>
        <Intro />
        <Skills />
        <Contact />
      </ContentWrapper>
    </Container>
  );
}

// TODO: Refactor margins, make it a custom Text component
const Intro = () => {
  const { themed } = useColorModeSwitcher();
  return (
    <Box as="section" m="auto">
      <SectionHeading mb="4.5rem">About</SectionHeading>
      <Heading mb="0.5rem" as="h3" variant="h3">
        Background
      </Heading>
      <Box maxW={{ base: '20rem', sm: '30rem', md: '40rem' }} p={0.5}>
        <Text mb="2rem">
          Thank you for your interest, can't really boast much. I equally enjoy
          doing frontend and backend. Although, that's the way to be lightly
          overwhelmed. I would mainly describe myself as a frontend developer. I
          have extensive experience working with javascript ecosystem. And I try
          to learn something new everyday. Apart from some of my graphics
          experiments I learn Go and everything about designing systems for the
          robust web applications.
        </Text>
        <Text mb="2rem">
          I live and work in NYC, but I originally came form{' '}
          <Link
            color={themed}
            href={'https://duckduckgo.com/?q=Belarus&t=brave&ia=web'}
          >
            Belarus
          </Link>
          , a tiny country in Eastern Europe, where my parents escaped political
          oppression.
        </Text>
        <Text mb="2rem">
          I studied Multimedia Computing at Brooklyn College from 2016-2020 and
          have since been working part-time jobs to pay for the college. I
          developed a passion for writing code back in college when I was
          Engineering major taking a C++ course. And interest, when I was
          solving math problems with Pascal in 6th grade, as I've never actually
          enjoyed doing math on my own.
        </Text>
        <Text mb="2rem">
          I don't have a formal information design background. For the most part
          I just wing it ad hoc and hope for the best. 😅
        </Text>
        <Heading mb="0.5rem" as="h3" variant="h3">
          What I've been up to?
        </Heading>
        <Text mb="2rem">
          I've been focused on building React applications, diving deeper into
          React itself, libraries and tools surrounding it. At the moment I'm
          trying to get better at testing, optimizing performance and
          typescript. I'm passionate about WASM, GO & Rust. I want to learn more
          about databases and product management.
        </Text>
        <Text mb="2rem">
          The rest of time I devote to helping out mother with my little
          brother, traveling with my fiancée, and music.
        </Text>
        {/* <Text mb="2rem">Experiences 2</Text>
        <Text mb="2rem">Experiences 3</Text> */}
        <Heading mb="0.5rem" as="h3" variant="h3">
          Interests
        </Heading>
        <Text mb="2rem">
          When I'm not coding you'll typically find me engaging wth another
          creative or engaging activity such as writing, music, 3D design,
          gaming, discovering playlists, or occasionally getting lost in NYC
          jazz bars. So many of them are still closed 😥
        </Text>
        <Text mb="2rem">Currently trying to finish my first music album.</Text>
        <Text>
          Although I love to keep myself busy with activities, I also make sure
          to set aside time to spend with family, going for walks and drinks
          with fiends.
        </Text>
      </Box>
    </Box>
  );
};

const Skills = () => {
  const tools = Object.values(tool);
  return (
    <Box as="section" m="auto">
      <SectionHeading mb={{ base: '2rem', xl: '3rem' }}>
        Tools & Technologies
      </SectionHeading>
      <Flex direction="row" justifyContent="center">
        <Box
          maxW={{ base: '20rem', sm: '30rem', md: '40rem' }}
          textAlign="center"
          p={0.5}
        >
          <Text mb="8rem">
            One of my favorite things has been discovering all the amazing tools
            developers have created. <br />
            Here are some of the tools I use most frequently.
          </Text>
        </Box>
      </Flex>
      <Grid
        as="ul"
        gap={6}
        templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
      >
        {tools.map((skill) => (
          <Skill
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
            key={skill.id}
          />
        ))}
      </Grid>
    </Box>
  );
};

const Skill = ({ name, icon, color }) => {
  const [hover, toggleHover] = useToggle();
  return (
    <GridItem
      as="li"
      p={{ base: '0.3rem', '2xl': '0.6rem' }}
      display="flex"
      alignContent="center"
      flexDirection="column"
      listStyleType="none"
      textAlign="center"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <Icon
        mx="auto"
        mb="0.5rem"
        boxSize={{ base: '2rem', lg: '3rem', '2xl': '4rem' }}
        as={icon}
        fill={hover && color}
        transitionDuration="500ms"
      />
      {name}
    </GridItem>
  );
};

// TODO: Add more socials, although I don't really have any
const Contact = () => {
  const { themed } = useColorModeSwitcher();
  return (
    <Box id="contact" maxW="inherit" as="section" p={{ base: '1rem', md: 0 }}>
      <SectionHeading mb="4rem">Get in touch</SectionHeading>
      <Flex
        borderRadius="md"
        direction={{ base: 'column', xl: 'row' }}
        m="auto"
      >
        <Box m={{ base: '0 0 4rem 0', xl: '0 4rem 0 0' }} maxW="20rem" p={0}>
          <Text mb="1rem" variant="preTitle">
            Let's chat!
          </Text>
          <Text mb="2rem">
            If you have any questions, opportunities or would just like to say
            hey then feel free to fill out this form!
          </Text>
          <Text mb="2rem">
            Or if you would prefer to, you can also reach me on{' '}
            <Link color={themed} href={linkedin.href}>
              linkedin
            </Link>
            .
          </Text>
        </Box>
        <ContactForm />
      </Flex>
    </Box>
  );
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
