import { style } from "@vanilla-extract/css"
import { vars } from "src/themes/theme.css"
import { flex } from "src/component/Flex/Flex.css"

export const language = style([
  flex(),
  {
    alignSelf: "flex-start",
    color: vars.colors["text-vibrant-low"],
    fontFamily: vars.fonts.code,
    marginTop: vars.space.md,
    paddingTop: vars.space.xxs,
    paddingBottom: vars.space.xxs,
    paddingRight: vars.space.xs,
    paddingLeft: vars.space.xs,
    textTransform: "uppercase",
  },
])

export const pre = style({
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.low,
  fontFamily: vars.fonts.code,
  fontSize: vars.fontSizes.md,
  marginBottom: vars.space.md,
  overflow: "auto",
  padding: vars.space.lg,
})
