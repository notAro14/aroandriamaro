/** @jsxImportSource theme-ui */
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';

import '../styles/reset.css';
import '../styles/shadow.css';
import { theme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <section
        sx={{
          fontFamily: 'body',
          minHeight: '100%',
          width: ['100%', '768px', '1000px'],
          m: 'auto',
          p: '1rem',
        }}
      >
        <Component {...pageProps} />
      </section>
    </ThemeProvider>
  );
}
export default MyApp;
