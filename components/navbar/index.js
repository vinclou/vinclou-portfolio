import React, { useEffect, useRef } from 'react';
import { Box, Flex, HStack, VStack } from '@chakra-ui/layout';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { IconButton } from '@chakra-ui/button';
import { useMediaQuery } from '@chakra-ui/react';
import { useToggle } from '@/utils/hooks/useToggle';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import { useColorMode } from '@chakra-ui/color-mode';
import { StyledLink } from '../styled/link';
import { Logo } from '@/components/svg';

export const Navbar = ({ isOpen, toggleIsOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorDark } = useColorModeSwitcher();

  return (
    <Flex
      mb={isOpen ? { base: '1rem' } : { base: '4.5rem', lg: '3rem' }}
      as="nav"
      p="4"
      justify="space-between"
    >
      <MenuButton isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
      <Logo fill={colorDark} />
      <HStack spacing={{ base: 0, md: 8 }}>
        <Flex align="center" display={{ base: 'none', lg: 'flex' }} as="ul">
          <Item variant="noStyle" href="/">
            Home
          </Item>
          <Item variant="noStyle" href="/blog">
            Blog
          </Item>
          <Item variant="noStyle" href="/about">
            About
          </Item>
          <Item variant="noStyle" href="/projects">
            Projects
          </Item>
          <Item isExternal variant="noStyle" href="/Vincent-Arlou-Res_L.pdf">
            CV
          </Item>
        </Flex>
        <IconButton
          id="toggleTheme"
          borderRadius="sm"
          variant="icon"
          onClick={toggleColorMode}
          aria-label={
            colorMode === 'light' ? 'Toggle dark mode' : 'Toggle light Mode'
          }
          icon={
            colorMode === 'light' ? (
              <IoMoon size="1.25rem" />
            ) : (
              <IoSunnyOutline size="1.25rem" />
            )
          }
        />
      </HStack>
    </Flex>
  );
};

export const MobileNavMenu = () => {
  return (
    <VStack spacing={4} w="100%">
      <VStack p={4} w="100%" my={8} spacing={8} as="ul">
        <Item spacing={4} variant="large" href="/">
          Home
        </Item>
        <Item spacing={4} variant="large" href="/about">
          About
        </Item>
        <Item spacing={4} variant="large" href="/projects">
          Projects
        </Item>
        <Item spacing={4} variant="large" href="/blog">
          Blog
        </Item>
      </VStack>
      <VStack p={4} w="100%" my={8} spacing={8} as="ul">
        <Item variant="large" href="/newsletter">
          Newsletter
        </Item>
        <Item variant="large" href="/community">
          Community
        </Item>
        <Item variant="large" href="/uses">
          Uses
        </Item>
      </VStack>
    </VStack>
  );
};

const MenuButton = ({ isOpen, toggleIsOpen, ...props }) => {
  const [clicked, toggleClicked] = useToggle();
  const inputRef = useRef(null);

  const [isLargerThan990] = useMediaQuery('(min-width: 990px)');

  /* Fix the bug, where side bar is open on window resize */
  useEffect(() => {
    if (isOpen && isLargerThan990) {
      inputRef.current.click();
    }
  }, [isLargerThan990]);

  const handleClick = () => {
    console.log('Clicked');
    toggleIsOpen();
    toggleClicked();
  };
  return (
    <IconButton
      ref={inputRef}
      borderRadius="sm"
      variant="ghost"
      onClick={handleClick}
      display={{ base: 'block', lg: 'none' }}
      w="48px"
      h="48px"
      icon={<MenuIcon clicked={clicked} />}
      _hover={{ variant: 'ghost' }}
      {...props}
    />
  );
};

const MenuIcon = ({ clicked }) => {
  const { colorDark } = useColorModeSwitcher();
  return (
    <Box w="100%" h="100%" position="relative">
      <Line
        left={clicked ? '8px' : '4px'}
        bg={colorDark}
        top={clicked ? '22px' : '16px'}
        transform={clicked ? 'rotate(45deg)' : 'none'}
        width={clicked ? '32px' : '40px'}
      />
      <Line
        left={clicked ? '8px' : '4px'}
        transform={clicked ? 'rotate(-45deg)' : 'none'}
        bg={colorDark}
        bottom={clicked ? '22px' : '16px'}
        width={clicked ? '32px' : '16px'}
      />
    </Box>
  );
};

const Line = ({ ...props }) => {
  return (
    <Box
      {...props}
      borderRadius="1px"
      as="span"
      position="absolute"
      height="4px"
      transition="all 0.3s ease-in-out"
    />
  );
};

const Item = ({ children, href, ...props }) => {
  const { colorGrey } = useColorModeSwitcher();
  //const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <VStack
      align="start"
      pb={{ base: 4, lg: 0 }}
      w="100%"
      as="li"
      listStyleType="none"
      borderBottom={{ base: '1px solid', lg: 'none' }}
      borderColor={colorGrey}
    >
      <StyledLink {...props} href={href}>
        {children}
      </StyledLink>
    </VStack>
  );
};
