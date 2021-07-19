import {
  Box,
  Heading,
  List,
  Text,
  Container as ChakraContainer
} from '@chakra-ui/layout';
import { Container } from '@/layouts/container';
import { ProjectCard } from '@/components/project-card';
import { ContentWrapper } from '@/layouts/contentWrapper';
import projects from '@/data/projects';

//threeJS imports
import { Canvas } from '@react-three/fiber';

const Projects = () => {
  return (
    <Container title="Projects | Vincent Arlou">
      <ContentWrapper>
        {/* You should make sure 3D gets rendered only on the client side */}
        <div id="three-js canvas">
          <Canvas>
            <mesh>
              <boxGeometry />
              <meshPhongMaterial />
              <ambientLight intensity={0.1} />
              <directionalLight color="red" position={[0, 0, 5]} />
            </mesh>
          </Canvas>
        </div>
        <Intro />
      </ContentWrapper>
    </Container>
  );
};

const Intro = () => {
  return (
    <Box w="90%" as="section" mb="2rem">
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
      mx="auto"
      justifyContent="space-between"
      display={{ base: 'block', '2xl': 'flex' }}
      flexWrap="wrap"
    >
      {projects.map((project) => (
        <ProjectCard
          mb="8rem"
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

export default Projects;
