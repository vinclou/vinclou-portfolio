import Head from 'next/head';
import '@fontsource/sora/400.css';
import '@fontsource/sora/700.css';
import { Box, Flex, Heading, Link, Text, Icon } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/button';
import { Center } from '@chakra-ui/layout';
import { VStack } from '@chakra-ui/layout';
import { Logo } from '../components/assets/logo';
import { Construction } from '../components/assets/construction';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex minH="100vh" direction="column">
      <Head>
        <title>Vincent Arlou</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex p="2rem" justify="space-between" align="center">
        <Logo />
        <Button onClick={toggleColorMode}>
          Lights
          {colorMode === 'light' ? ' off' : ' on'}
        </Button>
      </Flex>

      <Center mt="20vh">
        <VStack textAlign="center" spacing="4">
          <Construction boxSize="7rem" />
          <Heading as="h1" variant="h1">
            This site is currently under construction
          </Heading>
          <Heading variant="h2">
            Connect with me on{' '}
            <Link
              color={colorMode === 'light' ? 'purple.600' : 'purple.300'}
              isExternal
              href="https://github.com/vinclou"
            >
              GitHub
            </Link>{' '}
            or{' '}
            <Link
              color={colorMode === 'light' ? 'red.600' : 'red.300'}
              isExternal
              href="https://www.linkedin.com/in/vincent-arlou-933a44163/"
            >
              LinkedIn
            </Link>
          </Heading>
        </VStack>
      </Center>
    </Flex>
  );
}
