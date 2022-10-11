import { useCallback } from "react"
import { useTheme } from "next-themes"

export function useThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const switchTheme = useCallback(() => {
    let nextTheme = ""
    switch (resolvedTheme) {
      case "dark":
        nextTheme = "light"
        break
      case "light":
        nextTheme = "dark"
        break
      default:
        nextTheme = resolvedTheme ?? "light"
    }
    setTheme(nextTheme)
  }, [setTheme, resolvedTheme])
  return { switchTheme, theme, resolvedTheme }
}

export default useThemeSwitcher
