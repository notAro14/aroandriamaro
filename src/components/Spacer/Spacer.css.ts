import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "src/themes/stitches.config"

const base = style({ display: "block" })

const sizes = {
  "2xl": theme.space["2xl"].computedValue,
  xl: theme.space.xl.computedValue,
  lg: theme.space.lg.computedValue,
  md: theme.space.md.computedValue,
}

export const size = styleVariants(sizes, (token) => [base, { height: token }])
export type Size = keyof typeof size
