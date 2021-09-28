import {
  Heading,
  Box,
  Button,
  Center,
  List,
  ListItem,
  HStack,
  Icon,
  VStack,
  Text,
  Stack
} from '@chakra-ui/react';
import { useColorModeSwitcher } from '@/hooks/useColorModeSwitcher';
// import { useMediaQuery } from '@chakra-ui/media-query';

//TODO: fix color styles, fix button positioning on very tiny phones
const ProjectCard = ({
  logo,
  title,
  description,
  tools,
  live,
  proto,
  repo,
  ...props
}) => {
  const { colorDark, colorGrey, colorLight } = useColorModeSwitcher();
  // const [isMobile] = useMediaQuery('(max-width: 400px)');
  return (
    <Box
      as="li"
      py={{ base: '0.5rem', '2xl': '0.2rem' }}
      px={{ base: '0.5rem', '2xl': '0.2rem' }}
      // mx="0.5rem"
      // my="0.5rem"
      listStyleType="none"
      borderBottom="0.1rem solid"
      borderRadius="0.7rem"
      borderColor={colorGrey}
      w={{ base: '340px', lg: '30rem' }}
      minW="340px"
      // maxW="520px"
      {...props}
    >
      <Center
        // w="100%"
        borderTopRadius="0.6rem"
        // fill={colorLight}
        mb="2.5rem"
        h="8rem"
        // bg={colorDark}
        // bgPos="center"
        bgImage={logo}
        bgSize="auto"
        // bgRepeat="no-repeat"
      >
        {/* <Heading color={colorLight} as="p" variant="h3">
          {title}
        </Heading> */}
      </Center>
      <VStack px="1rem" align="start" spacing="1rem">
        <Heading data-testid="project-title" as="h3" variant="h3">
          {title}
        </Heading>
        <Text data-testid="project-description">{description}</Text>
        <List display="flex" flexDirection="row">
          {tools.map((tool) => (
            <ListItem key={tool.id} p="0.5rem">
              <Icon
                aria-label={tool.name}
                transitionDuration="300ms"
                boxSize="1.5rem"
                as={tool.icon}
                _hover={{ fill: tool.color }}
              />
            </ListItem>
          ))}
        </List>
        <Stack direction={['column', 'row']} pb="2rem">
          {live && (
            <Button as="a" href={live} variant="primary">
              Visit Site
            </Button>
          )}
          {proto && (
            <Button as="a" href={proto} variant="primary">
              Prototype
            </Button>
          )}
          <Button as="a" href={repo} variant="secondary">
            View Code
          </Button>
        </Stack>
      </VStack>
    </Box>
  );
};

export { ProjectCard };
