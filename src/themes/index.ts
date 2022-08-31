import changeColorAlpha from "src/utils/change-color-alpha"
import { blue, slate, blueDark, slateDark } from "@radix-ui/colors"

import { createTheme } from "src/themes/stitches.config"
import shadows from "src/themes/tokens/shadows"

const computeColors = (
  colors: Record<string, string>,
  type: "brand" | "gray" | "accent"
) =>
  Object.keys(colors).reduce((acc, k, idx) => {
    acc[`${type}${idx + 1}`] = colors[k]
    return acc
  }, {} as Record<string, string>)

const brandColor = computeColors(blue, "brand")
const brandDarkColor = computeColors(blueDark, "brand")
const grayColor = computeColors(slate, "gray")
const grayDarkColor = computeColors(slateDark, "gray")

export const { className: lightClassName } = createTheme("light", {
  colors: {
    ...brandColor,
    ...grayColor,
    "bg-transparent": changeColorAlpha(brandColor.brand1, 0.5),
  },
  shadows,
})

export const { className: darkClassName } = createTheme("dark", {
  colors: {
    ...brandDarkColor,
    ...grayDarkColor,
    "bg-transparent": changeColorAlpha(brandDarkColor.brand1, 0.5),
  },
})

export const themeValues = {
  light: lightClassName,
  dark: darkClassName,
}
