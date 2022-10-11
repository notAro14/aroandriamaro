import { styled, theme } from "src/themes/stitches.config"

const Heading = styled("h2", {
  lineHeight: 1.3,
  fontFamily: theme.fonts.secondary,
  letterSpacing: 2,
  variants: {
    color: {
      functional: {
        color: theme.colors["text-functional"],
      },
      "functional-low": {
        color: theme.colors["text-functional-low"],
      },
      vibrant: {
        color: theme.colors["text-vibrant"],
      },
      "vibrant-low": {
        color: theme.colors["text-vibrant-low"],
      },
    },
    size: {
      md: {
        fontSize: theme.fontSizes.md,
      },
      lg: {
        fontSize: theme.fontSizes.lg,
      },
      xl: {
        fontSize: theme.fontSizes.xl,
      },
      "2xl": {
        fontSize: theme.fontSizes["2xl"],
      },
      "3xl": {
        fontSize: theme.fontSizes["3xl"],
      },
      "4xl": {
        fontSize: theme.fontSizes["4xl"],
      },
    },
  },
  defaultVariants: {
    color: "functional",
  },
})

export default Heading
