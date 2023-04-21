import { createTheme } from "@vanilla-extract/css"
import props from "open-props"
import changeAlpha from "src/utils/change-color-alpha"
const shadowColor = "210deg 25% 63%"

const commonTokens = {
  fonts: {
    // body: '"Metropolis"',
    // heading: '"Luckiest Guy"',
    // code: '"Fira Code"',
    body: props.fontSans,
    heading: props.fontSans,
    code: props.fontMono,
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
    thin: "100",
    "extra-light": "200",
    light: "300",
    regular: "400",
    medium: "500",
    "semi-bold": "600",
    bold: "700",
    "extra-bold": "800",
    black: "900",
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
  ratio: {
    widescreen: props.ratioWidescreen,
  },
}

export const [dark, vars] = createTheme({
  ...commonTokens,
  colors: {
    bg: props.gray9,
    "bg-transparent": changeAlpha(props.gray9, 0.5),

    "text-vibrant-low": props.yellow5,
    "text-vibrant": props.yellow0,

    "text-functional-low": props.gray5,
    "text-functional": props.gray0,
  },
  shadows: {
    low: "unset",
    medium: "unset",
    high: "unset",
  },
})

export const light = createTheme(vars, {
  ...commonTokens,
  colors: {
    bg: props.gray2,
    "bg-transparent": changeAlpha(props.gray2, 0.5),

    "text-vibrant-low": props.pink7,
    "text-vibrant": props.pink12,

    "text-functional-low": props.gray7,
    "text-functional": props.gray12,
  },
  shadows: {
    low: `0.3px 0.5px 0.7px hsl(${shadowColor} / 0.34),
    0.4px 0.8px 1px -1.2px hsl(${shadowColor} / 0.34),
    1px 2px 2.5px -2.5px hsl(${shadowColor} / 0.34)`,
    medium: `0.3px 0.5px 0.7px hsl(${shadowColor} / 0.36),
    0.8px 1.6px 2px -0.8px hsl(${shadowColor} / 0.36),
    2.1px 4.1px 5.2px -1.7px hsl(${shadowColor} / 0.36),
    5px 10px 12.6px -2.5px hsl(${shadowColor} / 0.36)`,
    high: `0.3px 0.5px 0.7px hsl(${shadowColor} / 0.34),
    1.5px 2.9px 3.7px -0.4px hsl(${shadowColor} / 0.34),
    2.7px 5.4px 6.8px -0.7px hsl(${shadowColor} / 0.34),
    4.5px 8.9px 11.2px -1.1px hsl(${shadowColor} / 0.34),
    7.1px 14.3px 18px -1.4px hsl(${shadowColor} / 0.34),
    11.2px 22.3px 28.1px -1.8px hsl(${shadowColor} / 0.34),
    17px 33.9px 42.7px -2.1px hsl(${shadowColor} / 0.34),
    25px 50px 62.9px -2.5px hsl(${shadowColor} / 0.34)`,
  },
})
