import React from 'react';
import { HStack, Box, Heading } from '@chakra-ui/react';
import { useColorModeSwitcher } from '@/hooks/useColorModeSwitcher';

const SectionHeading = ({ children, ...props }) => {
  const { colorGrey } = useColorModeSwitcher();
  return (
    <HStack {...props} w="100%">
      <Box flex="1" h="1px" bg={colorGrey} />
      <Heading textAlign="center" px="1rem" as="h3" variant="h3">
        {children}
      </Heading>
      <Box flex="1" h="1px" bg={colorGrey} />
    </HStack>
  );
};

export { SectionHeading };