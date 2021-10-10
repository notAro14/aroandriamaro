import '@fontsource/merriweather';
import '@fontsource/inter';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { MDXEmbedProvider } from 'mdx-embed';

import { theme } from '@/styles/theme';
import AppLayout from '@/components/layout/app-layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MDXEmbedProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </MDXEmbedProvider>
    </ChakraProvider>
  );
}
export default MyApp;
