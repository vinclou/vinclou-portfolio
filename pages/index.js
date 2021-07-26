import NextLink from 'next/link';
import { Container } from '@/layouts/container';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { useMediaQuery } from '@chakra-ui/media-query';
import {
  Box,
  Button,
  Heading,
  Flex,
  List,
  VStack,
  Text
} from '@chakra-ui/react';

import { HeroSvg } from '@/components/svg';
import { Subscribe } from '@/components/subscribe';
import { ProjectCard } from '@/components/project-card';
import { ScrollArrow } from '@/components/scroll';
import { ArticleCard } from '@/components/article-card';
// data imports
import projects from '@/data/projects';

//TODO make all the needed components
export default function Home() {
  return (
    <Container title="Home Page | Vincent Arlou">
      <ContentWrapper>
        <Hero />
        <ArticleCard />
        <FeaturedProjects />
        <Subscribe />
      </ContentWrapper>
    </Container>
  );
}

const Hero = () => {
  const [isXLarge] = useMediaQuery('(min-width: 1180px)');
  const { scrollPos } = useScrollPosition();

  return (
    <Box w={{ base: '90%', '2xl': '95%' }}>
      <Flex mb="4rem" justify="space-between">
        <Box w={{ base: '100%', xl: '50%' }}>
          <Heading as="h1" mb="1.5rem" variant="h1">
            👋 I'm Vincent Arlou
          </Heading>
          <Text mb={{ base: '4rem', lg: '6rem' }} as="h2" variant="subtitle">
            Welcome, you'll be able to find out a bit about me and the work I
            do.
          </Text>
          <Heading as="h3" variant="h3" mb="2rem">
            Ok, But Who Are You?
          </Heading>
          <Text fontSize="xl" mb={{ base: '1rem', lg: '2rem' }}>
            When I look back on my past and think how much time I wasted on
            nothing, how much time has been lost in futilities, errors,
            laziness, incapacity to live. I'm just someone who wants to know
            life.
          </Text>
          <Text fontSize="xl" mb={{ base: '1rem', lg: '2rem' }}>
            As a software developer, all I wanna do is making high quality
            software that will make world a better place. I'll just be happy if
            people find value in my work.
          </Text>
          <Text fontSize="xl" mb={{ base: '1rem', lg: '2rem' }}>
            Feel free to have a look around, and learn more about myself.
          </Text>
          <NextLink href="/about#contact" passHref>
            <Button as="a" variant="primaryThemed" size="lg">
              Get in touch
            </Button>
          </NextLink>
        </Box>
        {isXLarge && <HeroSvg />}
      </Flex>
      {isXLarge && <ScrollArrow scrollPos={scrollPos} />}
    </Box>
  );
};

//TODO make it a standalone component/file, fix how many project's are rendered
const FeaturedProjects = () => {
  return (
    <VStack spacing="4rem" w="100%" m="auto">
      <SectionHeading>Featured Projects</SectionHeading>
      <Flex
        w="100%"
        mb="2.5rem"
        direction={{ base: 'column', xl: 'row' }}
        justify="end"
      >
        <Projects />
      </Flex>
      <NextLink href="/projects" passHref>
        <Button
          as="a"
          textTransform="capitalize"
          display="block"
          textAlign="center"
          fontSize={{ base: 'lg', lg: 'xl' }}
          variant="secondaryThemed"
        >
          See all projects
        </Button>
      </NextLink>
    </VStack>
  );
};
//TODO make it a standalone component/file
const Projects = () => {
  return (
    <List
      mx="auto"
      justifyContent="space-between"
      display={{ base: 'block', '2xl': 'flex' }}
    >
      {projects
        .filter((project) => project.feature)
        .map((project) => (
          <ProjectCard
            data-testid="project-card"
            logo={project.logo}
            title={project.title}
            description={project.description}
            tools={project.tools}
            live={project.live}
            proto={project.proto}
            repo={project.repo}
            key={project.id}
          />
        ))}
    </List>
  );
};

const SectionHeading = ({ children }) => {
  return (
    <Heading as="h2" textAlign="center" variant="h2">
      {children}
    </Heading>
  );
};
