import { createStitches } from "@stitches/react"
import { plum, mauve, plumDark, mauveDark } from "@radix-ui/colors"

export const { styled, getCssText, theme, createTheme } = createStitches({
  theme: {
    colors: {
      ...plumDark,
      ...mauveDark,

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

      "text-functional": "$text-hi-gray",
      "text-vibrant": "$text-hi",
    },
    fonts: {
      sans: '"Metropolis"',
      mono: '"Fira Code"',
      primary: "$sans",
      secondary: "$sans",
      tertiary: "$mono",

      //"comp-text": "$sem-primary",
      //"comp-heading": "$sem-secondary",

      //secondary: '"Metropolis", serif',
      //primary: '"Metropolis", sans-serif',
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

export const lightTheme = createTheme("light-theme", {
  colors: {
    ...plum,
    ...mauve,
  },
})
