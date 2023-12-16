import { style } from "@vanilla-extract/css"
import { vars } from "src/themes/theme.css"
import { flex } from "src/components/Flex/Flex.css"

export const language = style([
  flex(),
  {
    alignSelf: "flex-start",
    color: vars.colors["text-vibrant-low"],
    fontFamily: vars.fonts.code,
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.bold,
    marginTop: vars.space.md,
    textTransform: "uppercase",
  },
])

export const pre = style({
  borderRadius: vars.radii.md,
  boxShadow: vars.shadows.medium,
  fontFamily: vars.fonts.code,
  fontSize: vars.fontSizes.sm,
  marginBottom: vars.space.md,
  overflow: "auto",
  padding: vars.space.lg,
})
