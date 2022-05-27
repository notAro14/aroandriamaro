import { ThemeProvider } from "@emotion/react"
import { useCallback, useEffect, useState } from "react"
import merge from "lodash.merge"
import get from "lodash.get"
import { useAtom } from "jotai"
import { v4 as uuidv4 } from "uuid"

import "styles/reset.css"
import { theme as rawTheme, modes } from "theme"
import Font from "shared/font"
import ToggleThemeProvider from "theme/toggle-theme-provider"

import type { AppPropsWithLayout } from "types"
import PageLayout from "shared/layout/page-layout"
import { AAN_UNIQUE_ID } from "../contants"
import { uniqueIdAtom } from "../atoms"

type ColorMode = keyof typeof modes
const ALL_COLOR_MODES = Object.keys(modes)
const COLOR_MODE_KEY = "color-mode"

const getTheme = (theme: typeof rawTheme, mode: ColorMode) =>
  merge({}, theme, {
    colors: get(theme.colors?.modes, mode, theme.colors),
    shadows: get(theme.shadows?.modes, mode, theme.shadows),
  })

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [colorMode, setColorMode] = useState<ColorMode>("light")
  const toggleTheme = useCallback(
    () =>
      setColorMode((prev) => {
        let nextColorMode: ColorMode = "light"
        switch (prev) {
          case "light":
            nextColorMode = "dark"
            break
          case "dark":
            nextColorMode = "light"
            break
          default:
            nextColorMode = "light"
            break
        }
        localStorage.setItem(COLOR_MODE_KEY, nextColorMode)
        return nextColorMode
      }),
    []
  )

  const [, setUniqueId] = useAtom(uniqueIdAtom)

  useEffect(() => {
    let storedUniqueId = localStorage.getItem(AAN_UNIQUE_ID)
    if (storedUniqueId === null || typeof storedUniqueId === "undefined") {
      storedUniqueId = uuidv4()
      localStorage.setItem(AAN_UNIQUE_ID, storedUniqueId)
    }
    setUniqueId(storedUniqueId)

    const userColorMode = localStorage.getItem(COLOR_MODE_KEY) as
      | ColorMode
      | undefined
      | null
    if (userColorMode && ALL_COLOR_MODES.includes(userColorMode))
      setColorMode(userColorMode)
  }, [setUniqueId])

  const theme = getTheme(rawTheme, colorMode)

  const getLayout =
    Component.getLayout ?? ((page) => <PageLayout>{page}</PageLayout>)
  return (
    <ThemeProvider theme={theme}>
      <Font />
      <ToggleThemeProvider value={toggleTheme}>
        {getLayout(<Component {...pageProps} />)}
      </ToggleThemeProvider>
    </ThemeProvider>
  )
}
export default MyApp
