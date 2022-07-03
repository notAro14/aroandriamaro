import "src/styles/reset.css"
import "src/styles/fonts.css"

import type { AppPropsWithLayout } from "src/types"
import PageLayout from "src/shared/layout/page-layout"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <PageLayout>{page}</PageLayout>)
  return <>{getLayout(<Component {...pageProps} />)}</>
}
export default MyApp
