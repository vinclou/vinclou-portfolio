import '../styles/globals.css';
/* Fonts */
import '@fontsource/sora';
import "@fontsource/iosevka"
import '@fontsource/antic-didone';
import '@fontsource/baloo-bhai-2';

// import { ColorModeScript } from "@chakra-ui/react"
/* Fonts */
import customTheme from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      {/* According to the docs, this should be put in a _document file, might cause bugs...*/}
      {/* <ColorModeScript initialColorMode={customTheme.config.initialColorMode} /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
