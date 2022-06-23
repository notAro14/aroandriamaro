import { FC } from "react"

import ContentLayout from "shared/layout/content-layout"
import Flex from "shared/flex"
import Footer from "shared/layout/footer"
import Header from "shared/layout/header"
import { theme } from "lib/stitches.config"

const PageLayout: FC = ({ children }) => {
  return (
    <Flex
      as="section"
      css={{
        "flexDirection": "column",
        "backgroundColor": theme.colors.appBg,
        "minHeight": "100%",
        "transition": "background-color 200ms ease-in-out",
        "*": {
          transition: "background-color 200ms ease-in-out",
        },
      }}
    >
      <Header />
      <ContentLayout>{children}</ContentLayout>
      <Footer />
    </Flex>
  )
}

export default PageLayout
