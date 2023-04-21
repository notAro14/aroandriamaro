import { FC } from "react"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"

import useIsBrowser from "src/hooks/use-is-browser"
import useThemeSwitcher from "src/hooks/use-theme-switcher"
import * as styles from "./ThemeSelect.css"
import Flex from "src/component/Flex"

const ThemeSelect: FC = () => {
  const { resolvedTheme, switchTheme } = useThemeSwitcher()
  const isBrowser = useIsBrowser()
  if (isBrowser === false) return null

  return (
    <Flex align="center" gap="md">
      <button
        className={styles.button}
        aria-label="Toggle theme"
        onClick={switchTheme}
      >
        {resolvedTheme === "light" && (
          <MoonIcon width={20} height={20} className={styles.icon} />
        )}
        {resolvedTheme === "dark" && (
          <SunIcon width={20} height={20} className={styles.icon} />
        )}
      </button>
    </Flex>
  )
}

export default ThemeSelect
