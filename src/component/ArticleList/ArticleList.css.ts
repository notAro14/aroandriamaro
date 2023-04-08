import { style } from "@vanilla-extract/css"
import { flex } from "src/component/Flex/Flex.css"

export const articleList = style([
  flex({ direction: "column", gap: "3xl" }),
  { listStyleType: "none" },
])
