import type { AppProps } from 'next/app';
import { MDXEmbedProvider } from 'mdx-embed';
import { ThemeProvider } from 'theme-ui';

import '../styles/globals.css';
import { theme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MDXEmbedProvider>
        <Component {...pageProps} />
      </MDXEmbedProvider>
    </ThemeProvider>
  );
}
export default MyApp;
