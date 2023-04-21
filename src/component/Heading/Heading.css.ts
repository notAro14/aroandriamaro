import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { vars } from "src/themes/theme.css"

export const heading = recipe({
  base: {
    lineHeight: 1.2,
    fontFamily: vars.fonts.heading,
    fontWeight: vars.fontWeights.bold,
    letterSpacing: 2,
  },
  variants: {
    color: {
      functional: {
        color: vars.colors["text-functional"],
      },
      "functional-low": {
        color: vars.colors["text-functional-low"],
      },
      vibrant: {
        color: vars.colors["text-vibrant"],
      },
      "vibrant-low": {
        color: vars.colors["text-vibrant-low"],
      },
    },
    size: {
      md: {
        fontSize: vars.fontSizes.md,
      },
      lg: {
        fontSize: vars.fontSizes.lg,
      },
      xl: {
        fontSize: vars.fontSizes.xl,
      },
      "2xl": {
        fontSize: vars.fontSizes["2xl"],
      },
      "3xl": {
        fontSize: vars.fontSizes["3xl"],
      },
      "4xl": {
        fontSize: vars.fontSizes["4xl"],
      },
    },
  },
  defaultVariants: {
    color: "functional",
  },
})

export type HeadingVariants = RecipeVariants<typeof heading>
