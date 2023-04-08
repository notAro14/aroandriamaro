import { style } from "@vanilla-extract/css"

import { vars } from "src/themes/theme.css"

import { flex } from "src/component/Flex/Flex.css"
import { text } from "src/component/Text/Text.css"

export const container = style({
  display: "grid",
  height: 150,
  placeItems: "center",
})

export const main = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  fontSize: vars.fontSizes.md,
  justifyContent: "space-between",
  gap: vars.space.xs,
  marginLeft: "auto",
  marginRight: "auto",
  paddingRight: vars.space.md,
  paddingLeft: vars.space.md,
  width: "100%",
})

export const copyright = style([flex({ gap: "xs" }), text({ size: "inherit" })])

export const socials = style([
  {
    listStyleType: "none",
  },
  flex({ align: "center", gap: "lg" }),
])

export const social = style([text()])
