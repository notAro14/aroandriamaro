import { ThemeProvider } from "next-themes"

import "src/styles/reset.css"
import "src/styles/fonts.css"

import type { AppPropsWithLayout } from "src/types"
import DefaultLayout from "src/layouts/default-layout"
import { themeValues } from "src/themes"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)
  return (
    <ThemeProvider attribute="class" defaultTheme="system" value={themeValues}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}
export default MyApp
