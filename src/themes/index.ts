import changeColorAlpha from "src/utils/change-color-alpha"
import {
  blue as blueColor,
  slate as slateColor,
  blueDark as blueDarkColor,
  slateDark as slateDarkColor,
} from "@radix-ui/colors"

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

const brandColor = computeColors(blueColor, "brand")
const brandDarkColor = computeColors(blueDarkColor, "brand")

const semanticTokens = {
  bg: "$brand1",
  "bg-subtle": "$brand2",
  ui: "$brand3",
  "ui-hovered": "$brand4",
  "ui-selected": "$brand5",
  line: "$brand6",
  border: "$brand7",
  "border-hovered": "$brand8",
  solid: "$brand9",
  "solid-hovered": "$brand10",
  "text-lo": "$brand11",
  "text-hi": "$brand12",
  "text-lo-gray": "$slate11",
  "text-hi-gray": "$slate12",
  shadow: "210deg 25% 63%",

  "text-functional": "$text-hi-gray",
  "text-functional-low": "$text-lo-gray",
  "text-vibrant": "$text-hi",
  "text-vibrant-low": "$text-lo",
}

export const { className: lightClassName } = createTheme("grass-theme", {
  colors: {
    ...brandColor,
    ...slateColor,
    ...semanticTokens,
    "bg-transparent": changeColorAlpha(brandColor.brand1, 0.5),
  },
  shadows,
})

export const { className: darkClassName } = createTheme("grass-dark-theme", {
  colors: {
    ...brandDarkColor,
    ...slateDarkColor,
    ...semanticTokens,
    "bg-transparent": changeColorAlpha(brandDarkColor.brand1, 0.5),
  },
})

export const themeValues = {
  light: lightClassName,
  dark: darkClassName,
}
