import '../styles/globals.css';
import '@fontsource/sora';
import '@fontsource/iosevka/800.css';
// import { ColorModeScript } from "@chakra-ui/react"
/* Fonts */
import customTheme from '../styles/theme';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { prismLightTheme, prismDarkTheme } from '@/styles/theme/prism';
// import { MDXProvider } from '@mdx-js/react';
// import MDXComponents from '@/components/mdx-components';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
        `}
      />
      {children}
    </>
  );
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalStyle>
        {/* <MDXProvider components={MDXComponents}> */}
        <Component {...pageProps} />
        {/* </MDXProvider> */}
      </GlobalStyle>
    </ChakraProvider>
  );
};

export default MyApp;
