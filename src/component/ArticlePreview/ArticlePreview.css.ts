import { heading } from "src/component/Heading/Heading.css"
import { anchor } from "src/component/Anchor/Anchor.css"
import { text } from "src/component/Text/Text.css"
import { flex } from "src/component/Flex/Flex.css"

export const articleTitle = heading({ size: "2xl" })
export const articleTitleLink = anchor({ color: "inherit" })
export const pubDate = text({ color: "vibrant-low", size: "sm" })
export const description = text()
export const container = flex({ direction: "column", gap: "sm" })
export const innerContainer = flex({ direction: "column" })
