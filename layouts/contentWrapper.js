import { VStack } from '@chakra-ui/layout';

export const ContentWrapper = ({ children }) => {
  return <VStack spacing={{ base: '3rem', lg: '7rem' }}>{children}</VStack>;
};
