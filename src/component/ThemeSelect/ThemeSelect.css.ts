import { style } from "@vanilla-extract/css"
import { vars } from "src/themes/theme.css"

export const select = style({
  background: "none",
  border: "none",
  fontFamily: vars.fonts.code,
  fontSize: vars.fontSizes.sm,
})
