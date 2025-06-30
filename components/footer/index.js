import React from 'react';
import NextLink from 'next/link';
import { useToggle } from '@/hooks/useToggle';
import { Icon } from '@chakra-ui/icons';
import { Link, HStack, VStack, Center } from '@chakra-ui/react';
import VisuallyHidden from '@chakra-ui/visually-hidden';
import { github, linkedin } from '@/data/socials';

const Footer = ({ isLarge }) => {
  return (
    <VStack
      as="footer"
      borderTop="1px solid"
      borderColor="neutral.500"
      py="32px"
      w="100%"
      spacing={{ base: '16px', lg: '64px' }}
    >
      {isLarge ? <Full /> : <Condensed isLarge={isLarge} />}
      <Link
        align="center"
        href={`${github.href}/vinclou-portfolio`}
        variant="noStyle"
        isExternal
      >
        © Designed and coded by Vincent Arlou
      </Link>
    </VStack>
  );
};

const Condensed = ({ isLarge }) => {
  return (
    <HStack as="ul">
      <SocialLink
        color={github.color}
        icon={github.icon}
        href={github.href}
        name={github.name}
        isLarge={isLarge}
      />
      <SocialLink
        color={linkedin.color}
        icon={linkedin.icon}
        href={linkedin.href}
        name={linkedin.name}
        isLarge={isLarge}
      />
    </HStack>
  );
};

const Full = () => {
  return (
    <HStack align="start" spacing="16rem">
      <MainRoutes />
      <SubRoutes />
      <Socials />
    </HStack>
  );
};

const MainRoutes = () => {
  return (
    <VStack h="100%" align="start">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/Vincent-Arlou-Res_L.pdf">CV</NavLink>
    </VStack>
  );
};

const SubRoutes = () => {
  return (
    <VStack h="100%" align="start">
      <NavLink href="/newsletter">Newsletter</NavLink>
      <NavLink href="/snippets">Snippets</NavLink>
      <NavLink href="/uses">Uses</NavLink>
    </VStack>
  );
};

const Socials = () => {
  return (
    <VStack spacing={0.25} h="100%" as="ul">
      <SocialLink
        color={github.color}
        icon={github.icon}
        href={github.href}
        name={github.name}
      >
        Github
      </SocialLink>
      <SocialLink
        color={linkedin.color}
        icon={linkedin.icon}
        href={linkedin.href}
        name={linkedin.name}
      >
        LinkedIn
      </SocialLink>
    </VStack>
  );
};

const SocialLink = ({ children, color, icon, href, name, isLarge }) => {
  const [hover, toggleHover] = useToggle();
  return (
    <Center
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      as="li"
      listStyleType="none"
    >
      <Link
        variant="subtle"
        display="flex"
        alignItems="center"
        p={2}
        href={href}
        isExternal
      >
        <Icon
          transform={hover ? 'translateY(-4px)' : 'none'}
          transitionDuration="500ms"
          fill={hover && color}
          mr={{ lg: '0.25rem' }}
          boxSize={{ base: '1.5rem', lg: '1rem' }}
          aria-hidden={true}
          as={icon}
        />
        {children}
        {!isLarge && <VisuallyHidden>{name}</VisuallyHidden>}
      </Link>
    </Center>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link variant="subtle">{children}</Link>
    </NextLink>
  );
};

export { Footer };