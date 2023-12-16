import { FC } from "react"

import useIsBrowser from "src/hooks/use-is-browser"
import * as styles from "./ThemeSelect.css"
import { useTheme } from "next-themes"

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
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  )
}

export default ThemeSelect
