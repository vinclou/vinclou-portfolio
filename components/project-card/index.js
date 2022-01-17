import {
  Heading,
  Box,
  Button,
  Center,
  List,
  ListItem,
  Icon,
  VStack,
  Text,
  Stack
} from '@chakra-ui/react';
import { useColorModeSwitcher } from '@/hooks/useColorModeSwitcher';

const ProjectCard = ({
  logo,
  title,
  description,
  tools,
  live,
  proto,
  repo,
  isPrivate,
  ...props
}) => {
  const { colorGrey } = useColorModeSwitcher();
  return (
    <Box
      as="li"
      py={{ base: '0.5rem', '2xl': '0.2rem' }}
      px={{ base: '0.5rem', '2xl': '0.2rem' }}
      listStyleType="none"
      borderBottom="0.1rem solid"
      borderRadius="0.7rem"
      borderColor={colorGrey}
      w={{ base: '340px', lg: '27rem' }}
      minW="340px"
      {...props}
    >
      <Center
        borderTopRadius="0.6rem"
        mb="2.5rem"
        h="8rem"
        bgImage={logo}
        bgSize="auto"
      />

      <VStack px="1rem" align="start" spacing="1rem">
        <Heading data-testid="project-title" as="h3" variant="h3">
          {title}
        </Heading>
        <Text data-testid="project-description" h="2rem">
          {description}
        </Text>
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
            <Button as="a" href={live} variant="primary" disabled={isPrivate}>
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
