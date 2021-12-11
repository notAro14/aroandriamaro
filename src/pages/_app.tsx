/** @jsxImportSource theme-ui */
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';

import '../styles/globals.css';
import { theme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <section
        sx={{
          fontFamily: 'body',
          minHeight: '100%',
          p: '1rem',
        }}
      >
        <Component {...pageProps} />
      </section>
    </ThemeProvider>
  );
}
export default MyApp;
