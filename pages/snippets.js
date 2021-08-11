import React from 'react';
// chakra
import {
  Box
  //
  //
  //
} from '@chakra-ui/layout';
// wrappers & components
import { Container } from '@/layouts/container';
import { ContentWrapper } from '@/layouts/contentWrapper';
// hooks
// import { useToggle } from '@/utils/hooks/useToggle';
// import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';

export default function About() {
  return (
    <Container title="Vincent Arlou | Snippets">
      <ContentWrapper>Snippets</ContentWrapper>
    </Container>
  );
}
