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
import * as THREE from 'three';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Reflector,
  Text as DreiText,
  useTexture,
  useGLTF
} from '@react-three/drei';
import ThreeDScene from '@/components/3d-scene';

const Projects = () => {
  return (
    <>
      <Container title="Projects | Vincent Arlou">
        <ContentWrapper>
          <div id="three-js-canvas" width="100%">
            <ThreeDScene />
          </div>
          <Intro />
        </ContentWrapper>
      </Container>
    </>
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
