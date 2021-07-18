import { extendTheme } from '@chakra-ui/react';
import { styles } from './styles';
import { colors } from './colors';
import { Heading, Text, fonts, textStyles } from './typography';
import { Button } from './components/button';
import { Link } from './components/link';

const overrides = {
  styles,
  colors,
  fonts,
  textStyles,
  components: {
    Button,
    Heading,
    Text,
    Link
  }
};

export default extendTheme(overrides);
