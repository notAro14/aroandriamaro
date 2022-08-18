import { FC } from "react"

import ContentLayout from "src/layout/content-layout"
import Flex from "src/ui/flex"
import Footer from "src/layout/footer"
import Header from "src/layout/header"

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
