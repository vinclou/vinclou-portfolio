import NextLink from 'next/link';
import { Container } from '@/layouts/container';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { useMediaQuery } from '@chakra-ui/media-query';
import {
  Heading,
  Box,
  Button,
  Center,
  Flex,
  List,
  ListItem,
  HStack,
  Icon,
  VStack,
  Text
} from '@chakra-ui/react';
// import { HeroVisual } from '@/components/svg';
import { MyTestSvg } from '@/components/svg/myTestSvg';
import { Subscribe } from '@/components/subscribe/index';
import { ProjectCard } from '@/components/project-card';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import { BsArrowDown } from 'react-icons/bs';
// data imports
import projects from '@/data/projects';

//TODO make all the needed components
export default function Home() {
  return (
    <Container>
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
  const [isXtraLarge] = useMediaQuery('(min-width: 1280px)');
  const { scrollPos } = useScrollPosition();

  return (
    <Box w={{ base: '90%', '2xl': '95%' }}>
      <Flex mb="4rem" justify="space-between">
        <Box w={{ base: '100%', xl: '50%' }}>
          <Heading as="h1" mb="1.5rem" variant="h1">
            👋 I'm Vincent Arlou
          </Heading>
          <Text mb={{ base: '4rem', lg: '6rem' }} as="h2" variant="subtitle">
            Welcome, you will be able to find my works and my thouhgts on this
            resource.
          </Text>
          <Heading as="h3" variant="h3" mb="1.5rem">
            Ok, but who are you?
          </Heading>
          <Text fontSize="xl" mb="2rem">
            When I look back on my past and think how much time I wasted on
            nothing, how much time has been lost in futilities, errors,
            laziness, incapacity to live. I'm just someone who wants to know
            life and I want to create high quality software that will make world
            a better place.
          </Text>
          <Text fontSize="xl" mb={{ base: '1rem', lg: '2rem' }}>
            Feel free to have a look around, and learn more about myself and
            what I like to work on.{' '}
          </Text>
          <NextLink href="/about#contact" passHref>
            <Button as="a" variant="primaryThemed" size="lg">
              Get in touch
            </Button>
          </NextLink>
        </Box>
        {/* {isXtraLarge && <HeroVisual />} */}
        {isXtraLarge && <MyTestSvg />}
      </Flex>
      {isXtraLarge && <ScrollArrow scrollPos={scrollPos} />}
    </Box>
  );
};

const ScrollArrow = ({ scrollPos }) => {
  const { colorDark } = useColorModeSwitcher();
  return (
    <VStack
      opacity={scrollPos ? 0 : 1}
      transition="visibility 0s linear 300ms, opacity 600ms"
      // might as well put display none
      visibility={scrollPos ? 'hidden' : 'visible'}
      // display={scrollPos ? 'none' : 'inline'}
    >
      <span>{`<Scroll>`}</span>
      <Icon
        as={BsArrowDown}
        boxSize="1.5em"
        fill={colorDark}
        css={`
          animation: arrowAnimation 2s infinite ease-in-out;
          @keyframes arrowAnimation {
            0% {
              opacity: 0;
            }
            30% {
              opacity: 1;
            }
            60% {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
        `}
      />
    </VStack>
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

//TODO make it a standalone component/file
export const ArticleCard = () => {
  const { colorGrey } = useColorModeSwitcher();
  return (
    <VStack spacing="4rem" w="100%" mx="auto">
      <SectionHeading>Featured Blog Post</SectionHeading>
      <Box
        mx="auto"
        p="2rem"
        border="2px solid"
        borderColor={colorGrey}
        w={{ base: '21em', lg: '57.5rem' }}
      >
        <Heading textTransform="capitalize" as="h4" variant="h4" mb="0.5rem">
          Will do heading for my blog post
        </Heading>
        <Text variant="body" mb="2rem">
          This is some arbitrary subtitle for my blog post that you should most
          definitely read!
        </Text>
        <Flex>
          <Text>Read more</Text>
          <Text>
            <span>→</span>
          </Text>
        </Flex>
      </Box>
    </VStack>
  );
};

const SectionHeading = ({ children }) => {
  return (
    <Heading as="h2" textAlign="center" variant="h2">
      {children}
    </Heading>
  );
};
