import { SunIcon, MoonIcon } from "@radix-ui/react-icons"
import { FC } from "react"

import useIsBrowser from "src/hooks/use-is-browser"
import useThemeSwitcher from "src/hooks/use-theme-switcher"
import useThemeSwitcherHotkeys from "src/hooks/use-theme-switcher-hotkeys"
import { styled, theme } from "src/themes/stitches.config"
import Flex from "src/ui/flex"

const StyledButton = styled("button", {
  border: "none",
  backgroundColor: theme.colors.ui,
  boxShadow: theme.shadows.low,
  borderRadius: "50%",
  padding: theme.space.xs,
  transition: "all 200ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows.medium,
    cursor: "pointer",
  },
})

const StyledKbd = styled("kbd", {
  color: theme.colors["text-functional"],
  fontFamily: theme.fonts.mono,
  textTransform: "uppercase",
})

const ThemeSelect: FC = () => {
  const key = useThemeSwitcherHotkeys()
  const { resolvedTheme, switchTheme } = useThemeSwitcher()
  const isBrowser = useIsBrowser()
  if (isBrowser === false) return null

  return (
    <Flex align="center" spacing="md">
      <StyledKbd>{key}</StyledKbd>
      <StyledButton aria-label="Toggle theme" onClick={switchTheme}>
        {resolvedTheme === "light" && <SunIcon />}
        {resolvedTheme === "dark" && <MoonIcon />}
      </StyledButton>
    </Flex>
  )
}

export default ThemeSelect
