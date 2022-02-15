import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';

import 'styles/reset.css';
import { theme } from 'theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
