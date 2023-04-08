import { FC, ReactNode } from "react"

import Footer from "src/component/Footer"
import Header from "src/component/Header"
import Spacer from "src/component/Spacer"
import * as styles from "./MainLayout.css"

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className={styles.container}>
      <Header />
      <Spacer size="lg" />
      <main className={styles.main}>{children}</main>
      <Spacer size="lg" />
      <Footer />
    </section>
  )
}

export default MainLayout
