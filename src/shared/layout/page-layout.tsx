import { FC } from "react"

import ContentLayout from "shared/layout/content-layout"
import Flex from "shared/flex"
import Footer from "shared/layout/footer"
import Header from "shared/layout/header"

const PageLayout: FC = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="appBg"
      minHeight="100%"
      as="section"
      sx={{
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
