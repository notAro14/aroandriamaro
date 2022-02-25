import { ThemeProvider } from '@emotion/react';

import 'styles/reset.css';
import { theme } from 'theme';
import Font from 'shared/font';

import type { AppPropsWithLayout } from 'types';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider theme={theme}>
      <Font />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
export default MyApp;
