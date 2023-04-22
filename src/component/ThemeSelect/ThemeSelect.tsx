import { FC } from "react"

import useIsBrowser from "src/hooks/use-is-browser"
import * as styles from "./ThemeSelect.css"
import { useTheme } from "next-themes"
import Emoji from "src/component/emoji"

const ThemeSelect: FC = () => {
  const { theme, setTheme } = useTheme()
  const isBrowser = useIsBrowser()
  if (isBrowser === false) return null

  return (
    <select
      className={styles.select}
      value={theme}
      onChange={(evt) => setTheme(evt.target.value)}
    >
      <option value="system">
        <Emoji symbol="️💻" ariaLabel="System" /> System
      </option>
      <option value="light">
        <Emoji symbol="☀️" ariaLabel="Sun" />
        Light
      </option>
      <option value="dark">
        <Emoji symbol="🌙" ariaLabel="Moon" /> Dark
      </option>
    </select>
  )
}

export default ThemeSelect
