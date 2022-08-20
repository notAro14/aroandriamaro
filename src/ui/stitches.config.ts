import { createStitches } from "@stitches/react"
import {
  plum,
  mauve,
  plumDark,
  mauveDark,
  sky as skyColor,
  skyDark as skyDarkColor,
  slate,
  slateDark,
  whiteA,
  grass as grassColor,
  olive,
  grassDark as grassDarkColor,
  oliveDark,
} from "@radix-ui/colors"
import changeColorAlpha from "src/utils/change-color-alpha"

const SHADOW_COLOR_KEY = "$colors$shadow"
const shadows = {
  low: `0.3px 0.5px 0.7px hsl(${SHADOW_COLOR_KEY} / 0.34),
  0.4px 0.8px 1px -1.2px hsl(${SHADOW_COLOR_KEY} / 0.34),
  1px 2px 2.5px -2.5px hsl(${SHADOW_COLOR_KEY} / 0.34)`,
  medium: `0.3px 0.5px 0.7px hsl(${SHADOW_COLOR_KEY} / 0.36),
  0.8px 1.6px 2px -0.8px hsl(${SHADOW_COLOR_KEY} / 0.36),
  2.1px 4.1px 5.2px -1.7px hsl(${SHADOW_COLOR_KEY} / 0.36),
  5px 10px 12.6px -2.5px hsl(${SHADOW_COLOR_KEY} / 0.36)`,
  high: `0.3px 0.5px 0.7px hsl(${SHADOW_COLOR_KEY} / 0.34),
  1.5px 2.9px 3.7px -0.4px hsl(${SHADOW_COLOR_KEY} / 0.34),
  2.7px 5.4px 6.8px -0.7px hsl(${SHADOW_COLOR_KEY} / 0.34),
  4.5px 8.9px 11.2px -1.1px hsl(${SHADOW_COLOR_KEY} / 0.34),
  7.1px 14.3px 18px -1.4px hsl(${SHADOW_COLOR_KEY} / 0.34),
  11.2px 22.3px 28.1px -1.8px hsl(${SHADOW_COLOR_KEY} / 0.34),
  17px 33.9px 42.7px -2.1px hsl(${SHADOW_COLOR_KEY} / 0.34),
  25px 50px 62.9px -2.5px hsl(${SHADOW_COLOR_KEY} / 0.34)`,
}

export const { styled, getCssText, theme, createTheme } = createStitches({
  theme: {
    colors: {
      ...plum,
      ...mauve,
      ...whiteA,

      bg: "$plum1",
      "bg-transparent": changeColorAlpha(plum.plum1, 0.5),
      "bg-subtle": "$plum2",
      ui: "$plum3",
      "ui-hovered": "$plum4",
      "ui-selected": "$plum5",
      line: "$plum6",
      border: "$plum7",
      "border-hovered": "$plum8",
      solid: "$plum9",
      "solid-hovered": "$plum10",
      "text-lo": "$plum11",
      "text-hi": "$plum12",
      "text-lo-gray": "$mauve11",
      "text-hi-gray": "$mauve12",
      "text-fg-white": "$whiteA12",

      "text-functional": "$text-hi-gray",
      "text-functional-low": "$text-lo-gray",
      "text-vibrant": "$text-hi",
      "text-vibrant-low": "$text-lo",
    },
    fonts: {
      sans: '"Metropolis"',
      mono: '"Fira Code"',

      primary: "$sans",
      secondary: "$sans",
      tertiary: "$mono",
    },
    fontSizes: {
      xxs: "0.512rem",
      xs: "0.64rem",
      sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
      md: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
      lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
      xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
      "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
      "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
      "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
    },
    fontWeights: {
      thin: 100,
      "extra-light": 200,
      light: 300,
      regular: 400,
      medium: 500,
      "semi-bold": 600,
      bold: 700,
      "extra-bold": 800,
      black: 900,
    },
    radii: {
      sm: "2px",
      md: "6px",
      lg: "20px",
    },
    space: {
      xxs: "4px",
      xs: "8px",
      sm: "12px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      "2xl": "48px",
      "3xl": "64px",
      "4xl": "96px",
      "5xl": "128px",
      "6xl": "192px",
      "7xl": "256px",
      "8xl": "384px",
      "9xl": "512px",
      "10xl": "640px",
      "11xl": "768px",
    },
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
})
const lightTheme = createTheme("light-theme", {
  colors: {
    shadow: "280deg 25% 63%",
  },
  shadows,
})

const darkTheme = createTheme("dark-theme", {
  colors: {
    ...plumDark,
    ...mauveDark,
    "bg-transparent": changeColorAlpha(plumDark.plum1, 0.5),
  },
})

const skySemantics = {
  bg: "$sky1",
  "bg-subtle": "$sky2",
  ui: "$sky3",
  "ui-hovered": "$sky4",
  "ui-selected": "$sky5",
  line: "$sky6",
  border: "$sky7",
  "border-hovered": "$sky8",
  solid: "$sky9",
  "solid-hovered": "$sky10",
  "text-lo": "$sky11",
  "text-hi": "$sky12",
  "text-lo-gray": "$slate11",
  "text-hi-gray": "$slate12",
  shadow: "190deg 27% 62%",

  "text-functional": "$text-hi-gray",
  "text-functional-low": "$text-lo-gray",
  "text-vibrant": "$text-hi",
  "text-vibrant-low": "$text-lo",
}
const skyTheme = createTheme("sky-theme", {
  colors: {
    ...skyColor,
    ...slate,
    ...skySemantics,
    "bg-transparent": changeColorAlpha(skyColor.sky1, 0.5),
  },
  shadows,
})
const skyDarkTheme = createTheme("sky-dark-theme", {
  colors: {
    ...skyDarkColor,
    ...slateDark,
    ...skySemantics,
    "bg-transparent": changeColorAlpha(skyDarkColor.sky1, 0.5),
  },
})
const grassSemantics = {
  bg: "$grass1",
  "bg-subtle": "$grass2",
  ui: "$grass3",
  "ui-hovered": "$grass4",
  "ui-selected": "$grass5",
  line: "$grass6",
  border: "$grass7",
  "border-hovered": "$grass8",
  solid: "$grass9",
  "solid-hovered": "$grass10",
  "text-lo": "$grass11",
  "text-hi": "$grass12",
  "text-lo-gray": "$olive11",
  "text-hi-gray": "$olive12",
  shadow: "120deg 18% 59%",

  "text-functional": "$text-hi-gray",
  "text-functional-low": "$text-lo-gray",
  "text-vibrant": "$text-hi",
  "text-vibrant-low": "$text-lo",
}
const grassTheme = createTheme("grass-theme", {
  colors: {
    ...grassColor,
    ...olive,
    ...grassSemantics,
    "bg-transparent": changeColorAlpha(grassColor.grass1, 0.5),
  },
  shadows,
})
const grassDarkTheme = createTheme("grass-dark-theme", {
  colors: {
    ...grassDarkColor,
    ...oliveDark,
    ...grassSemantics,
    "bg-transparent": changeColorAlpha(grassDarkColor.grass1, 0.5),
  },
})

const light = lightTheme.className
const dark = darkTheme.className
const sky = skyTheme.className
const skyDark = skyDarkTheme.className
const grass = grassTheme.className
const grassDark = grassDarkTheme.className

export const themeValues = {
  dark,
  light,
  // sort ASC
  grass,
  "grass dark": grassDark,
  sky,
  "sky dark": skyDark,
}

export const themeKeys = Object.keys(themeValues)
