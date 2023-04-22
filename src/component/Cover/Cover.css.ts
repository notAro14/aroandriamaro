import { style } from "@vanilla-extract/css"
import { vars } from "src/themes/theme.css"
import { text } from "../Text/Text.css"
import { anchor } from "../Anchor/Anchor.css"

export const imageContainer = style({
  aspectRatio: vars.ratio.widescreen,
  display: "block",
  position: "relative",
  marginBottom: vars.space["2xl"],
})
export const image = style({
  borderRadius: vars.radii.md,
  objectFit: "cover",
})
export const figcaption = style([
  text({ size: "sm" }),
  { position: "absolute", bottom: "-2rem" },
])
export const author = anchor()
