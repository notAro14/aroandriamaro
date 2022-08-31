import changeColorAlpha from "src/utils/change-color-alpha"
import {
  blue as blueColor,
  slate as slateColor,
  blueDark as blueDarkColor,
  slateDark as slateDarkColor,
} from "@radix-ui/colors"

import { createTheme } from "src/themes/stitches.config"
import shadows from "src/themes/tokens/shadows"

const semanticTokens = {
  bg: "$blue1",
  "bg-subtle": "$blue2",
  ui: "$blue3",
  "ui-hovered": "$blue4",
  "ui-selected": "$blue5",
  line: "$blue6",
  border: "$blue7",
  "border-hovered": "$blue8",
  solid: "$blue9",
  "solid-hovered": "$blue10",
  "text-lo": "$blue11",
  "text-hi": "$blue12",
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
    ...blueColor,
    ...slateColor,
    ...semanticTokens,
    "bg-transparent": changeColorAlpha(blueColor.blue1, 0.5),
  },
  shadows,
})

export const { className: darkClassName } = createTheme("grass-dark-theme", {
  colors: {
    ...blueDarkColor,
    ...slateDarkColor,
    ...semanticTokens,
    "bg-transparent": changeColorAlpha(blueDarkColor.blue1, 0.5),
  },
})

export const themeValues = {
  light: lightClassName,
  dark: darkClassName,
}
