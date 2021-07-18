import Head from 'next/head';
import useToggle from '@/utils/hooks/useToggle';
import { Button } from '@chakra-ui/button';
import { Box, VStack } from '@chakra-ui/react';
import { MobileNavMenu, Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const Container = ({ children, ...customMeta }) => {
  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <Box
      css={`
        border: 10px !important;
      `}
    >
      <Seo {...customMeta} />
      <Button
        variant="secondary"
        as="a"
        href="#skip"
        position="absolute"
        transform="translateX(-100%)"
        transition="transform 0.3s"
        _focus={{ transform: 'translateX(0%)' }}
      >
        Skip to Content
      </Button>
      <Box
        w={{ base: '100vw', '2xl': '80vw', '3xl': '72vw' }}
        minH="100vh"
        m="auto"
      >
        <Navbar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        <VStack spacing={{ base: '8rem', lg: '10rem' }} id="skip" as="main">
          {isOpen ? <MobileNavMenu /> : children}
          <Footer />
        </VStack>
      </Box>
    </Box>
  );
};

const Seo = ({ ...customMeta }) => {
  const meta = {
    title: 'Vincent Arlou',
    description:
      'Fullstack developer with a focus on designing and building scalable, maintainable and accessible solutions on the web.',
    // image: 'https://vinclou.com/static/images/banner.png', TODO ADD BANNER
    type: 'website',
    ...customMeta
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export { Container };