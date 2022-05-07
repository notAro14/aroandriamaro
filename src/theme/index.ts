import { plum, mauve, plumDark, mauveDark } from "@radix-ui/colors"

export const modes = {
  light: {
    "shadow": mauve.mauve8,
    "brand": plum.plum9,
    "brand-hover": plum.plum10,
    "appBg": "white",
    "compBg": plum.plum6,
    "compBg-hover": plum.plum5,
    "text": plum.plum12,
    "lo-text": plum.plum11,
    "light-gray": mauve.mauve5,
    "gray": mauve.mauve12,
    "border": mauve.mauve7,
  },
  dark: {
    "shadow": mauveDark.mauve2,
    "brand": plumDark.plum10,
    "brand-hover": plumDark.plum10,
    "appBg": plumDark.plum2,
    "compBg": plumDark.plum5,
    "compBg-hover": plumDark.plum4,
    "text": plumDark.plum12,
    "lo-text": plumDark.plum11,
    "light-gray": mauveDark.mauve3,
    "gray": mauveDark.mauve12,
    "border": plum.plum6,
  },
}

const colors = {
  ...modes.light,
  modes,
}

const fonts = {
  secondary: '"Metropolis", serif',
  primary: '"Metropolis", sans-serif',
  code: '"Fira Code", monospace',
}

const fontSizes = {
  "xxs": "0.512rem",
  "xs": "0.64rem",
  "sm": "0.8rem",
  "md": "1rem",
  "lg": "1.25rem",
  "xl": "1.563rem",
  "2xl": "1.953rem",
  "3xl": "2.441rem",
  "4xl": "3.052rem",
}

const radii = {
  sm: "2px",
  md: "6px",
  lg: "20px",
}

const space = [
  0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768,
]

const lightShadow = modes.light.shadow

export const theme = {
  colors,
  fonts,
  radii,
  fontSizes,
  space,
  shadows: {
    sm: `0px 1px 2px ${lightShadow}, 0px 2px 3px ${lightShadow}, 0px 3px 4px ${lightShadow}`,
    md: `2px 4px 8px ${lightShadow}, 2px 5px 9px ${lightShadow}, 2px 6px 10px ${lightShadow}`,
    modes: {
      light: {
        sm: `0px 1px 2px ${lightShadow}, 0px 2px 3px ${lightShadow}, 0px 3px 4px ${lightShadow}`,
        md: `2px 4px 8px ${lightShadow}, 2px 5px 9px ${lightShadow}, 2px 6px 10px ${lightShadow}`,
      },
      dark: {
        sm: "unset",
        md: "unset",
      },
    },
  },
}
