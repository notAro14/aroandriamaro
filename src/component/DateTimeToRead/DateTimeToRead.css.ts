import { style } from "@vanilla-extract/css"
import { vars } from "src/themes/theme.css"

import { flex } from "src/component/Flex/Flex.css"
import { text } from "src/component/Text/Text.css"

const base = style({
  marginBottom: vars.space["2xl"],
})
export const dateTimeToRead = style([
  base,
  flex({ gap: "md", align: "center", justify: "center" }),
  text({ size: "md", color: "functional-low" }),
])
