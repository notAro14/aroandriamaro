import { FC } from "react"

import ContentLayout from "src/shared/layout/content-layout"
import Flex from "src/shared/flex"
import Footer from "src/shared/layout/footer"
import Header from "src/shared/layout/header"

const PageLayout: FC = ({ children }) => {
  return (
    <Flex
      as="section"
      css={{
        flexDirection: "column",
        backgroundColor: "$bg",
        minHeight: "100%",
        transition: "background-color 200ms ease-in-out",
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
