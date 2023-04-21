import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { vars } from "src/themes/theme.css"

export const anchor = recipe({
  base: {
    textDecoration: "none",
    fontFamily: vars.fonts.body,
    fontWeight: vars.fontWeights["semi-bold"],
  },
  variants: {
    isExternal: {
      true: {
        alignItems: "center",
        color: vars.colors["text-vibrant-low"],
        display: "inline-flex",
        gap: vars.space.xxs,
        transition: "color 150ms cubic-bezier(0.65, 0.05, 0.36, 1)",

        ":hover": {
          cursor: "pointer",
          color: vars.colors["text-vibrant"],
        },
      },
      false: {
        color: vars.colors["text-vibrant-low"],
      },
    },
    color: {
      inherit: {
        color: "inherit",
      },
    },
  },
  compoundVariants: [
    {
      variants: { color: "inherit", isExternal: true },
      style: {
        color: "inherit",
        ":hover": {
          color: vars.colors["text-vibrant-low"],
          cursor: "pointer",
          transition: "color 150ms cubic-bezier(0.65, 0.05, 0.36, 1)",
        },
      },
    },
  ],

  defaultVariants: {
    isExternal: false,
  },
})

export type Variants = RecipeVariants<typeof anchor>
