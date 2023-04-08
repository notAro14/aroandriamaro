import { RecipeVariants, recipe } from "@vanilla-extract/recipes"
import { vars } from "src/themes/theme.css"

export const flex = recipe({
  base: {
    display: "flex",
  },
  variants: {
    gap: {
      xxs: {
        gap: vars.space.xxs,
      },
      xs: {
        gap: vars.space.xs,
      },
      sm: {
        gap: vars.space.sm,
      },
      md: {
        gap: vars.space.md,
      },
      lg: {
        gap: vars.space.lg,
      },
      xl: {
        gap: vars.space.xl,
      },
      "2xl": {
        gap: vars.space["2xl"],
      },
      "3xl": {
        gap: vars.space["3xl"],
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    justify: {
      center: {
        justifyContent: "center",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
      "space-between": {
        justifyContent: "space-between",
      },
      "space-around": {
        justifyContent: "space-around",
      },
      "space-evenly": {
        justifyContent: "space-evenly",
      },
    },
    wrap: {
      true: {
        flexWrap: "wrap",
      },
    },
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
  },
  defaultVariants: {
    gap: "xxs",
    direction: "row",
  },
})

export type Variants = RecipeVariants<typeof flex>
