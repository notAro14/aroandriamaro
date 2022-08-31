import changeColorAlpha from "src/utils/change-color-alpha"

import { createTheme } from "src/themes/stitches.config"
import shadows from "src/themes/tokens/shadows"
import {
  brandColor,
  grayColor,
  brandDarkColor,
  grayDarkColor,
} from "src/themes/tokens/core-colors"

export const { className: lightClassName } = createTheme("light", {
  colors: {
    ...brandColor,
    ...grayColor,
    brandA1: changeColorAlpha(brandColor.brand1, 0.5),
  },
  shadows,
})

export const { className: darkClassName } = createTheme("dark", {
  colors: {
    ...brandDarkColor,
    ...grayDarkColor,
    brandA1: changeColorAlpha(brandDarkColor.brand1, 0.5),
  },
})

export const themeValues = {
  light: lightClassName,
  dark: darkClassName,
}
