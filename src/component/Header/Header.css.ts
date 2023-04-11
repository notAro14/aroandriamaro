import { style } from "@vanilla-extract/css"
import { vars } from "src/themes/theme.css"
import { flex } from "src/component/Flex/Flex.css"
import { anchor } from "src/component/Anchor/Anchor.css"

export const header = style({
  backdropFilter: "blur(10px)",
  backgroundColor: vars.colors["bg-transparent"],
  height: 75,
  display: "grid",
  padding: `0 ${vars.space.sm}`,
  placeItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 1,
})

export const inner = style([
  flex({ align: "center", justify: "space-between" }),
  {
    marginLeft: "auto",
    marginRight: "auto",
    width: "clamp(250px, 100%, 90ch)",
  },
])

export const goToHome = style([anchor(), flex({ align: "center", gap: "md" })])
