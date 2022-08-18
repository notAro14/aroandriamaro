import { ThemeProvider } from "next-themes"

import "src/styles/reset.css"
import "src/styles/fonts.css"

import type { AppPropsWithLayout } from "src/types"
import PageLayout from "src/layout/page-layout"
import { themeValues, themeKeys } from "src/ui/stitches.config"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <PageLayout>{page}</PageLayout>)
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      themes={themeKeys}
      value={themeValues}
    >
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}
export default MyApp
