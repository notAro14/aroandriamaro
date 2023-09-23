import { style } from "@vanilla-extract/css"
import { vars } from "src/themes/theme.css"
import { flex } from "src/component/Flex/Flex.css"

export const container = style([
  flex({ direction: "column" }),
  {
    minHeight: "100%",
    backgroundColor: vars.colors.bg,
  },
])

export const main = style({
  flex: "1",
  paddingLeft: vars.space.md,
  paddingRight: vars.space.md,
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  "@media": {
    "screen and (min-width: 500px)": {
      maxWidth: "90ch",
    },
  },
})
