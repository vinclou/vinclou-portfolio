import Head from 'next/head';
import '@fontsource/sora/400.css';
import '@fontsource/sora/700.css';
import { Container } from '@/layouts/container';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Icon, VStack } from '@chakra-ui/react';
import { HeroVisual } from '@/components/svg';
import { MyTestSvg } from '@/components/svg/myTestSvg';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import { BsArrowDown } from 'react-icons/bs';

//TODO make all the needed components
export default function Home() {
  return (
    <Container>
      <ContentWrapper>
        <Hero />
        {/* <FeatureProjects />
        <Subscribe /> */}
      </ContentWrapper>
    </Container>
  );
}

const Hero = () => {
  const [isXtraLarge] = useMediaQuery('(min-width: 1280px)');
  const { scrollPos } = useScrollPosition();

  return (
    <Box w={{ base: '90%', '2xl': '100%' }}>
      <Flex mb="4rem" justify="space-between">
        <Box w={{ base: '100%', xl: '50%' }}>
          Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
          Hello Hello Hello Hello
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
          animation: arrowAnimation 1.5s infinite ease-in-out;
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
