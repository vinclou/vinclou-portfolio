import '../styles/globals.css';
/* Fonts */
import '@fontsource/sora';
import '@fontsource/antic-didone';
import '@fontsource/baloo-bhai-2';
/* Fonts */
import customTheme from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
