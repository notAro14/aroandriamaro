import { style } from "@vanilla-extract/css"
import { vars } from "src/themes/theme.css"
import { flex } from "src/component/Flex/Flex.css"
import { heading } from "src/component/Heading/Heading.css"

export const articleTitle = style([heading({ size: "2xl" }), {}])
export const articleReadMore = style([
  {
    ":hover": {
      gap: vars.space.sm,
    },
    transition: "gap 200ms cubic-bezier(0.65, 0.05, 0.36, 1)",
  },
  flex({ align: "center" }),
])
