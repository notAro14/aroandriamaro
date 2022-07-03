import "styles/reset.css"
import "styles/fonts.css"

import type { AppPropsWithLayout } from "types"
import PageLayout from "shared/layout/page-layout"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <PageLayout>{page}</PageLayout>)
  return <>{getLayout(<Component {...pageProps} />)}</>
}
export default MyApp
