import { FC } from "react"

import Footer from "src/components/footer"
import Header from "src/components/header"
import { PageLayoutContainer, PageLayoutMain } from "./default-layout.styles"

const PageLayout: FC = ({ children }) => {
  return (
    <PageLayoutContainer>
      <Header />
      <PageLayoutMain>{children}</PageLayoutMain>
      <Footer />
    </PageLayoutContainer>
  )
}

export default PageLayout
