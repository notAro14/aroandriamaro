import { FC } from "react"

import useIsBrowser from "src/hooks/use-is-browser"
import useThemeSwitcher from "src/hooks/use-theme-switcher"
import { button } from "./ThemeSelect.css"
import Flex from "src/component/Flex"

const ThemeSelect: FC = () => {
  const { resolvedTheme, switchTheme } = useThemeSwitcher()
  const isBrowser = useIsBrowser()
  if (isBrowser === false) return null

  return (
    <Flex align="center" gap="md">
      <button
        className={button}
        aria-label="Toggle theme"
        onClick={switchTheme}
      >
        {resolvedTheme}
      </button>
    </Flex>
  )
}

export default ThemeSelect
