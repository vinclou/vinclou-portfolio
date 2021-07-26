// TODO: Tweak 3D Animation to work well on phones and tablets
// TODO: Make Sure NoSsr works as expected
// TODO: Reafactor and make individual component files
import {
  Box,
  Heading,
  List,
  Text
  // Container as ChakraContainer
} from '@chakra-ui/layout';
import { Container } from '@/layouts/container';
import { ProjectCard } from '@/components/project-card';
import { ContentWrapper } from '@/layouts/contentWrapper';
import ThreeDScene from '@/components/3d-scene';
// hooks
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import { useMediaQuery } from '@chakra-ui/media-query';

import NoSsr from '@/utils/NoSsr';

import projects from '@/data/projects';

const Projects = () => {
  // show animation only if it's a laptop
  const [isLarge] = useMediaQuery('(min-width: 1180px)');

  const { threeAnimColor } = useColorModeSwitcher();
  return (
    <>
      <Container
        title="Projects | Vincent Arlou"
        // customSpacing={{ base: '0rem', lg: '0rem' }}
        footerColor={threeAnimColor}
      >
        {isLarge && (
          <NoSsr>
            <ThreeDScene animColor={threeAnimColor} />
          </NoSsr>
        )}
        <ContentWrapper
          backgroundColor={threeAnimColor}
        >
          <Intro />
        </ContentWrapper>
      </Container>
    </>
  );
};

const Intro = () => {
  return (
    <Box w="100%" as="section" mb="2rem">
      <Heading pl="1rem" as="h1" variant="h1">
        Projects
      </Heading>
      <Text pl="1rem" variant="subtitle" mb="4rem" w="80%">
        Here are some projects that I've recently worked on.
      </Text>
      <ProjectList />
    </Box>
  );
};

const ProjectList = () => {
  return (
    <List
      // mx="3rem"
      // do the responsive minW !
      minW={{ base: '20rem', sm: '30rem', md: '40rem' }}
      // minW="360px"
      flexWrap="wrap"
      display={{ base: 'block', lg: 'flex' }}
      justifySelf="center"
      // justifyContent="space-between"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          logo={project.logo}
          title={project.title}
          description={project.description}
          tools={project.tools}
          live={project.live}
          proto={project.proto}
          repo={project.repo}
          mb="3rem"
        />
      ))}
    </List>
  );
};

export default Projects;
