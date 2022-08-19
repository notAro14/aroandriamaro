import { FC, ReactNode } from "react"

import Footer from "src/components/footer"
import Navbar from "src/components/navbar"
import { PageLayoutContainer, PageLayoutMain } from "./default-layout.styles"

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <PageLayoutContainer>
      <Navbar />
      <PageLayoutMain>{children}</PageLayoutMain>
      <Footer />
    </PageLayoutContainer>
  )
}

export default DefaultLayout