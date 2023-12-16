import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { vars } from "src/themes/theme.css"

export const text = recipe({
  variants: {
    weigth: {
      "extra-light": {
        fontWeight: vars.fontWeights["extra-light"],
      },
      regular: {
        fontWeight: vars.fontWeights.regular,
      },
      bold: {
        fontWeight: vars.fontWeights.bold,
      },
    },
    size: {
      inherit: {
        fontSize: "inherit",
      },
      xxs: {
        fontSize: vars.fontSizes.xxs,
      },
      xs: {
        fontSize: vars.fontSizes.xs,
      },
      sm: {
        fontSize: vars.fontSizes.sm,
      },
      md: {
        fontSize: vars.fontSizes.md,
      },
      lg: {
        fontSize: vars.fontSizes.lg,
      },
    },
    lineHeight: {
      "1": {
        lineHeight: 1,
      },
      paragraph: {
        lineHeight: 1.6,
      },
    },
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
    decoration: {
      "line-through": {
        textDecoration: "line-through",
      },
    },
    family: {
      primary: {
        fontFamily: vars.fonts.body,
      },
      secondary: {
        fontFamily: vars.fonts.heading,
      },
    },
  },

  defaultVariants: {
    weigth: "regular",
    size: "md",
    lineHeight: "paragraph",
    color: "functional",
    family: "primary",
  },
})

export type Variants = RecipeVariants<typeof text>
