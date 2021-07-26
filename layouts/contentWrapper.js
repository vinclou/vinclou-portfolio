import { VStack } from '@chakra-ui/layout';
// TODO should I cahnge the width ? -->
const ContentWrapper = (props) => {
  return (
    <VStack width="100%" spacing={{ base: '3rem', lg: '6rem' }} {...props} />
  );
};

export { ContentWrapper };
