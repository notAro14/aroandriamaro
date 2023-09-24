import { FC } from "react"
import Link from "next/link"

import styles from "./Header.module.scss"

const Header: FC = () => {
  return (
    <header className={styles.root}>
      <div className={styles["header-inner"]}>
        <Link href="/" className={styles["go-to-home"]}>
          Aro&apos;s Blog
        </Link>
      </div>
    </header>
  )
}

export default Header
