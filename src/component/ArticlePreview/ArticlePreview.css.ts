import { style } from "@vanilla-extract/css"
import { heading } from "src/component/Heading/Heading.css"
import { anchor } from "src/component/Anchor/Anchor.css"
import { text } from "src/component/Text/Text.css"
import { flex } from "src/component/Flex/Flex.css"
import { vars } from "src/themes/theme.css"

export const articleTitle = heading({ size: "lg" })
export const articleTitleLink = style([
  anchor({ color: "inherit" }),
  { fontWeight: vars.fontWeights.bold },
])
export const pubDate = style([
  text({ color: "vibrant-low", size: "sm" }),
  { fontWeight: vars.fontWeights.bold },
])
export const description = text()
export const container = flex({ direction: "column", gap: "sm" })
export const innerContainer = flex({ direction: "column" })
