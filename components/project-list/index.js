import React from 'react';
import { List, Stack } from '@chakra-ui/layout';
import { ProjectCard } from '../project-card';
import projects from '@/data/projects';
import { useMediaQuery } from '@chakra-ui/react';

const ProjectList = () => {
  const isColumn = useMediaQuery('(min-width: 720px)');
  return (
    <List
      // do the responsive minW !
      mx="auto"
      display={{ base: 'block', lg: 'flex' }}
      // spacing={30}
      flexWrap="wrap"
      justifyContent="space-evenly"
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

export { ProjectList };
