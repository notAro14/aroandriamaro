import css, { SystemStyleObject } from "@styled-system/css"
import {
  color,
  compose,
  border,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
  styleFn,
} from "styled-system"

export const sx = (sx?: SystemStyleObject) => css(sx)

export const getSystemStyleProps = (...args: styleFn[]) =>
  compose(
    border,
    color,
    flexbox,
    layout,
    position,
    space,
    typography,
    shadow,
    system({
      gap: {
        property: "gap",
        scale: "space",
      },
      textTransform: true,
      textDecoration: true,
      textDecorationColor: {
        property: "textDecorationColor",
        scale: "colors",
      },
    }),
    ...args
  )
