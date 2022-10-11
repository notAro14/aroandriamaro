import { useHotkeys } from "@mantine/hooks"

import useThemeSwitcher from "src/hooks/use-theme-switcher"

export const useThemeSwitcherHotkeys = (keys = "mod+j") => {
  const { switchTheme } = useThemeSwitcher()
  useHotkeys([[keys, switchTheme]])
  return keys
}

export default useThemeSwitcherHotkeys
