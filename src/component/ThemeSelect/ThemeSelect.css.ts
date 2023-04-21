import { style } from "@vanilla-extract/css"
import { vars } from "src/themes/theme.css"
import { text } from "src/component/Text/Text.css"

export const button = style([
  {
    border: "none",
    background: "none",
    padding: vars.space.xs,
    textTransform: "uppercase",
    ":hover": {
      cursor: "pointer",
    },
  },
  text({ size: "sm" }),
])

export const icon = style({
  color: vars.colors["text-vibrant-low"],
})
