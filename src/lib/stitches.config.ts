import { createStitches } from "@stitches/react"
import {
  plum,
  mauve,
  plumDark,
  mauveDark,
  sky as skyColor,
  slate,
  whiteA,
  grass as grassColor,
  olive,
} from "@radix-ui/colors"

export const { styled, getCssText, theme, createTheme } = createStitches({
  theme: {
    colors: {
      ...plumDark,
      ...mauveDark,
      ...whiteA,

      bg: "$plum1",
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
    ...plum,
    ...mauve,
  },
})

const darkTheme = createTheme("dark-theme")

const skyTheme = createTheme("sky-theme", {
  colors: {
    ...skyColor,
    ...slate,
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

    "text-functional": "$text-hi-gray",
    "text-functional-low": "$text-lo-gray",
    "text-vibrant": "$text-hi",
    "text-vibrant-low": "$text-lo",
  },
})
const grassTheme = createTheme("grass-theme", {
  colors: {
    ...grassColor,
    ...olive,
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

    "text-functional": "$text-hi-gray",
    "text-functional-low": "$text-lo-gray",
    "text-vibrant": "$text-hi",
    "text-vibrant-low": "$text-lo",
  },
})

const light = lightTheme.className
const dark = darkTheme.className
const sky = skyTheme.className
const grass = grassTheme.className

export const themeValues = {
  light,
  dark,
  sky,
  grass,
}

export const themeKeys = Object.keys(themeValues)
