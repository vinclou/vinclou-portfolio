// TODO: Tweak 3D Animation to work well on phones and tablets
// TODO: Make Sure NoSsr works as expected
// TODO: Refactor and make individual component files
import { Box, Heading, Flex, Text } from '@chakra-ui/layout';
import { Container } from '@/layouts/container';
import { ProjectList } from '@/components/project-list';
import { ContentWrapper } from '@/layouts/contentWrapper';
import ThreeDScene from '@/components/3d-scene';
// hooks
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import { useMediaQuery } from '@chakra-ui/media-query';

import NoSsr from '@/utils/NoSsr';

const Projects = () => {
  // show animation only if it's a laptop
  const [isLarge] = useMediaQuery('(min-width: 900px)');

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
        <ContentWrapper backgroundColor={threeAnimColor}>
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
      <Flex
        w="100%"
        mb="2.5rem"
        direction={{ base: 'column', xl: 'row' }}
        justify="end"
      >
        <ProjectList />
      </Flex>
    </Box>
  );
};

export default Projects;
