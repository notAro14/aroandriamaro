import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"

import "src/themes/theme.scss"
import "src/styles/reset.css"

import type { AppPropsWithLayout } from "src/types"
import MainLayout from "src/component/MainLayout"
import { light, dark } from "src/themes/theme.css"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>)
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{ light, dark }}
      >
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
      <Analytics />
    </>
  )
}
export default MyApp
