import { FC } from "react"
import Link from "next/link"

import ThemeSelect from "src/component/ThemeSelect"
import Text from "src/component/Text"

import * as styles from "./Header.css"

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.goToHome}>
          <Text family="secondary" lineHeight="1">
            Aro&apos;s Blog
          </Text>
        </Link>
        <ThemeSelect />
      </div>
    </header>
  )
}

export default Header
