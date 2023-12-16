import { style } from "@vanilla-extract/css"
import { calc } from "@vanilla-extract/css-utils"
import { vars } from "src/themes/theme.css"
import { heading } from "src/components/Heading/Heading.css"
import { text } from "src/components/Text/Text.css"

const headingBase = style({
  marginTop: vars.space.lg,
  marginBottom: calc.negate(vars.space.md),
})

export const h1 = style([headingBase, heading({ size: "2xl" })])
export const h2 = style([headingBase, heading({ size: "xl" })])
export const h3 = style([headingBase, heading({ size: "lg" })])

export const paragraph = style([
  {
    marginTop: vars.space.lg,
    marginBottom: vars.space.lg,
  },
  text(),
])
export const ul = style({
  paddingLeft: vars.space.md,
  margin: `${vars.space.lg} 0`,
})
export const li = style([{ margin: 0 }, text()])
