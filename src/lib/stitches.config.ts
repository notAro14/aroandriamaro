import { createStitches } from "@stitches/react"
import { plum, mauve, plumDark, mauveDark } from "@radix-ui/colors"

export const { styled, getCssText, theme } = createStitches({
  theme: {
    colors: {
      ...plum,
      ...mauve,
      ...plumDark,
      ...mauveDark,
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
    fonts: {
      secondary: '"Metropolis", serif',
      primary: '"Metropolis", sans-serif',
      code: '"Fira Code", monospace',
    },
    fontSizes: {
      "xxs": "0.512rem",
      "xs": "0.64rem",
      "sm": "0.8rem",
      "md": "1rem",
      "lg": "1.25rem",
      "xl": "1.563rem",
      "2xl": "1.953rem",
      "3xl": "2.441rem",
      "4xl": "3.052rem",
    },
    radii: {
      sm: "2px",
      md: "6px",
      lg: "20px",
    },
    space: {
      "xxs": "4px",
      "xs": "8px",
      "sm": "12px",
      "md": "16px",
      "lg": "24px",
      "xl": "32px",
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
  utils: {
    // abbreviated margin
    m: (value: string | number) => ({
      margin: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    // abbreviated padding
    p: (value: string | number) => ({
      padding: value,
    }),
    pt: (value: string | number) => ({
      paddingTop: value,
    }),
    pr: (value: string | number) => ({
      paddingRight: value,
    }),
    pb: (value: string | number) => ({
      paddingBottom: value,
    }),
    pl: (value: string | number) => ({
      paddingLeft: value,
    }),
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
})
