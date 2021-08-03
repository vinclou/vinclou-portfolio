import React from 'react';
import {
  List, Stack,
} from '@chakra-ui/layout';
import { ProjectCard } from '../project-card';
import projects from '@/data/projects';

const ProjectList = () => {
  return (
    <Stack
      // do the responsive minW !
			mx="auto"
			direction={["column", "row" ]}
      minW={{ base: '20rem', sm: '30rem', md: '40rem' }}
      // flexWrap="wrap"
      display={{ base: 'block', lg: 'flex' }}
			// spacing={8}
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
    </Stack>
  );
};

export { ProjectList };