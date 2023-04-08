import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { vars } from "src/themes/theme.css"

export const size = recipe({
  base: { display: "block" },
  variants: {
    size: {
      md: {
        height: vars.space.md,
      },
      lg: {
        height: vars.space.lg,
      },
      xl: {
        height: vars.space.xl,
      },
      "2xl": {
        height: vars.space["2xl"],
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
export type Variants = RecipeVariants<typeof size>
