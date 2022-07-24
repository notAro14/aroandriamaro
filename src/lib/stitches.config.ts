import { createStitches } from "@stitches/react"
import { plum, mauve, plumDark, mauveDark } from "@radix-ui/colors"

export const { styled, getCssText, theme } = createStitches({
  theme: {
    colors: {
      ...plum,
      ...mauve,
      ...plumDark,
      ...mauveDark,
      shadow: mauveDark.mauve2,
      brand: plumDark.plum10,
      "brand-hover": plumDark.plum10,
      appBg: plumDark.plum2,
      compBg: plumDark.plum5,
      "compBg-hover": plumDark.plum4,
      text: plumDark.plum12,
      "lo-text": plumDark.plum11,
      "light-gray": mauveDark.mauve3,
      gray: mauveDark.mauve12,
      border: plum.plum6,

      "sem-bg": "$plum1",
      "sem-bg-subtle": "$plum2",
      "sem-ui-bg": "$plum3",
      "sem-ui-bg-hovered": "$plum4",
      "sem-ui-bg-selected": "$plum5",
      "sem-line": "$plum6",
      "sem-ui-border": "$plum7",
      "sem-ui-border-hovered": "$plum8",
      "sem-solid": "$plum9",
      "sem-solid-hovered": "$plum10",
      "sem-text-lo": "$plum11",
      "sem-text-hi": "$plum12",
      "sem-text-lo-gray": "$mauve11",
      "sem-text-hi-gray": "$mauve12",

      "comp-text-vibrant": "$sem-text-hi",
      "comp-text-functional": "$sem-text-hi-gray",
      "comp-heading-vibrant": "$sem-text-hi",
      "comp-heading-functional": "$sem-text-hi-gray",
    },
    fonts: {
      "core-sans": '"Metropolis"',
      "core-mono": '"Fira Code"',
      "sem-primary": "$core-sans",
      "sem-secondary": "$core-sans",
      "sem-tertiary": "$core-mono",

      "comp-text": "$sem-primary",
      "comp-heading": "$sem-secondary",

      secondary: '"Metropolis", serif',
      primary: '"Metropolis", sans-serif',
      code: '"Fira Code", monospace',
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

      "comp-text": "$lg",
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

      "comp-text": "$extra-light",
      "comp-heading": "$medium",
    },
    lineHeights: {
      "com-text-default": 1.5,
      "comp-heading": 1,
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
