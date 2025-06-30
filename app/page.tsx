'use client'

import { Box, Button, Heading, Flex, Link, VStack, Text, useMediaQuery } from '@chakra-ui/react'
import NextLink from 'next/link'
import { HeroSvg } from '@/components/svg'
import { useColorModeSwitcher } from '@/hooks/useColorModeSwitcher'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { ScrollArrow } from '@/components/scroll'
import { Subscribe } from '@/components/subscribe'
import { ArticleCard } from '@/components/article-card'
import { ProjectList } from '@/components/project-list'
import NoSsr from '@/utils/NoSsr'

export default function Home() {
  return (
    <Box w={{ base: '100vw', '2xl': '80vw', '3xl': '72vw' }} minH="100vh" m="auto">
      <VStack spacing={{ base: '2rem', lg: '6rem' }}>
        <Hero />
        <ArticleCard />
        <FeaturedProjects />
        <Subscribe />
      </VStack>
    </Box>
  )
}

const Hero = () => {
  const [isXLarge] = useMediaQuery('(min-width: 1180px)')
  const { themed } = useColorModeSwitcher()
  const { scrollPos } = useScrollPosition()

  return (
    <Box as="article" title="about" w={{ base: '90%', '2xl': '95%' }}>
      <Flex mb="4rem" justify="space-between">
        <Box w={{ base: '100%', xl: '50%' }}>
          <Heading as="h1" mb="1.5rem" variant="h1">
            👋 I'm Vincent Arlou
          </Heading>
          <Text mb={{ base: '4rem', lg: '6rem' }} as="h2" variant="subtitle">
            Welcome, you'll be able to find out a bit about me and the work I do.
          </Text>
          <Heading as="h2" variant="h2" mb="2rem">
            Ok, But Who Are You?
          </Heading>
          <Text fontSize="xl" mb={{ base: '1rem', lg: '2rem' }}>
            When I look back on my past and think how much time I wasted on
            nothing, how much time has been lost in futilities, errors,
            laziness, incapacity to live. I'm just someone who wants to know
            life.
          </Text>
          <Text fontSize="xl" mb={{ base: '1rem', lg: '2rem' }}>
            As a software developer, all I wanna do is make high quality
            software that helps people accomplish more in their lives.
          </Text>
          <Text fontSize="xl" mb={{ base: '1rem', lg: '2rem' }}>
            All in all, I value people and I hope you'll be able to find
            something interesting in here. This corner of the web, isn't solely
            for me.
          </Text>
          <Text fontSize="xl" mb={{ base: '1rem', lg: '2rem' }}>
            Feel free to have a look around and learn more. Check out{' '}
            <NextLink href={'/projects'} passHref>
              <Link color={themed}>projects page</Link>
            </NextLink>{' '}
            to see the short movie I've made.
          </Text>
          <NextLink href="/about#contact" passHref>
            <Button as="a" variant="primaryThemed" size="lg">
              Get in touch
            </Button>
          </NextLink>
        </Box>
        {isXLarge && (
          <NoSsr>
            <HeroSvg />
          </NoSsr>
        )}
      </Flex>
      {isXLarge && <ScrollArrow scrollPos={scrollPos} />}
    </Box>
  )
}

const FeaturedProjects = () => {
  return (
    <VStack spacing="4rem" w="100%" m="auto">
      <SectionHeading>Featured Projects</SectionHeading>
      <Flex
        w="100%"
        mb="2.5rem"
        direction={{ base: 'column', xl: 'row' }}
        justify="end"
      >
        <ProjectList />
      </Flex>
      <NextLink href="/projects" passHref>
        <Button
          as="a"
          textTransform="capitalize"
          display="block"
          textAlign="center"
          fontSize={{ base: 'lg', lg: 'xl' }}
          variant="secondaryThemed"
        >
          See all projects
        </Button>
      </NextLink>
    </VStack>
  )
}

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <Heading as="h2" textAlign="center" variant="h2">
      {children}
    </Heading>
  )
}