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
  Text
} from '@chakra-ui/react';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';

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
  return (
    <Box
      as="li"
      mb={{ base: '2rem', '2xl': 0 }}
      mx="1rem"
      listStyleType="none"
      border="1px solid"
      borderRadius="0.7rem"
      borderColor={colorGrey}
      w={{ base: '90%', md: '30rem' }}
      {...props}
    >
      <Center
        borderTopRadius="0.6rem"
        fill={colorLight}
        mb="2.5rem"
        w="100%"
        h="8rem"
        bg={colorDark}
      >
        {logo ? (
          logo
        ) : (
          <Heading color={colorLight} as="p" variant="h3">
            {title}
          </Heading>
        )}
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
        <HStack pb="2rem">
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
        </HStack>
      </VStack>
    </Box>
  );
};

export { ProjectCard };
