import { style } from "@vanilla-extract/css"
import { heading } from "src/component/Heading/Heading.css"
import { anchor } from "src/component/Anchor/Anchor.css"

export const articleTitle = style([heading({ size: "2xl" }), {}])
export const articleTitleLink = style([anchor({ color: "inherit" })])
