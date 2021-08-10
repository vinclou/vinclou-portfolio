import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useToggle } from '@/utils/hooks/useToggle';
import { Button } from '@chakra-ui/button';
import { Box, VStack } from '@chakra-ui/react';
import { MobileNavMenu, Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const Container = ({ footerColor, children, ...customMeta }) => {
  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <Box>
      <Seo {...customMeta} />
      <Box
        w={{ base: '100vw', '2xl': '80vw', '3xl': '72vw' }}
        minH="100vh"
        m="auto"
      >
        <Navbar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        <VStack id="skip" as="main" spacing={{ base: '2rem', lg: '6rem' }}>
          {isOpen ? <MobileNavMenu /> : children}
          <Footer customBgColor={footerColor} />
        </VStack>
      </Box>
    </Box>
  );
};

/*
  TODO: ADD JSON_LD ---
    From the first glance, it's pretty cumbersome to add,
    comparing to twitter/facebook meta data, it has to individually
    tailored on each page based on the content inside of it
    meaning you would have to create some utils to make all of
    those scripts.
*/
const Seo = ({ ...customMeta }) => {
  const router = useRouter();

  const meta = {
    title: 'Vincent Arlou - Developer, writer, and a stranger',
    description:
      'Fullstack developer with a focus on designing and building scalable, maintainable and accessible solutions on the web.',
    image: 'https://vincentarlou.com/static/images/banner.jpg',
    type: 'website',
    ...customMeta
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />

      <meta
        property="og:url"
        content={`https://vincentarlou.com${router.asPath}`}
      />

      <link
        rel="canonical"
        href={`https://https://vincentarlou.com${router.asPath}`}
      />

      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Vincent Arlou" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vincentarlou" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </Head>
  );
};

const SkipButton = () => {
  return (
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
  );
};

export { Container };
