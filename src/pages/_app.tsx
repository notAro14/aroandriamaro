import { ThemeProvider } from "next-themes"

import "src/styles/reset.css"
import "src/styles/fonts.css"

import type { AppPropsWithLayout } from "src/types"
import PageLayout from "src/shared/layout/page-layout"
import { light, dark } from "src/lib/stitches.config"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <PageLayout>{page}</PageLayout>)
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light,
        dark,
      }}
    >
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}
export default MyApp
