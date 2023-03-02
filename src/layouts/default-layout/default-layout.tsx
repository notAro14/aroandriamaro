import { FC, ReactNode } from "react"

import Footer from "src/components/footer"
import Navbar from "src/components/navbar"
import Spacer from "src/components/Spacer"
import { PageLayoutContainer, PageLayoutMain } from "./default-layout.styles"

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <PageLayoutContainer>
      <Navbar />
      <Spacer size="lg" />
      <PageLayoutMain>{children}</PageLayoutMain>
      <Spacer size="lg" />
      <Footer />
    </PageLayoutContainer>
  )
}

export default DefaultLayout
