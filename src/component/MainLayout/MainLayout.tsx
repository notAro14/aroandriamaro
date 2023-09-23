import { FC, ReactNode } from "react"

import Footer from "src/component/Footer"
import Header from "src/component/Header"
import Spacer from "src/component/Spacer"
import styles from "./MainLayout.module.scss"

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className={styles.root}>
      <Header />
      <Spacer size="lg" />
      <main className={styles.main}>{children}</main>
      <Spacer size="lg" />
      <Footer />
    </section>
  )
}

export default MainLayout
