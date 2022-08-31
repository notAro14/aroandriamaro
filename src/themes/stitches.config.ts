import { createStitches } from "@stitches/react"
import { whiteA } from "@radix-ui/colors"

import { semanticColors } from "./tokens/semantic-colors"

export const { styled, getCssText, theme, createTheme } = createStitches({
  theme: {
    colors: {
      ...semanticColors,
      shadow: "210deg 25% 63%",

      "text-functional": semanticColors["text-hi-gray"],
      "text-functional-low": semanticColors["text-lo-gray"],
      "text-vibrant": semanticColors["text-hi"],
      "text-vibrant-low": semanticColors["text-lo"],

      "text-fg-white": whiteA.whiteA12,
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
