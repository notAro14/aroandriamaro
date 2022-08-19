import type { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"

import { getAllArticles } from "src/utils/mdx"

export type Articles = ReturnType<typeof getAllArticles>

export type NextPageWithLayout<T = Record<string, unknown>> = NextPage<T> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
