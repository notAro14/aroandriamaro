import { styled, theme } from "src/themes/stitches.config"

export const Spacer = styled("span", {
  display: "block",
  variants: {
    size: {
      "4xl": {
        height: theme.space["4xl"],
      },
      "3xl": {
        height: theme.space["3xl"],
      },
      "2xl": {
        height: theme.space["2xl"],
      },
      xl: {
        height: theme.space.xl,
      },
      lg: {
        height: theme.space.lg,
      },
      md: {
        height: theme.space.md,
      },
      sm: {
        height: theme.space.sm,
      },
      xs: {
        height: theme.space.xs,
      },
      xxs: {
        height: theme.space.xxs,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export default Spacer
