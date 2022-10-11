import { styled, theme } from "src/themes/stitches.config"
import { lightClassName as light } from "src/themes"

export const PageLayoutContainer = styled("section", {
  flexDirection: "column",
  display: "flex",
  [`.${light} &`]: {
    backgroundColor: theme.colors.whiteA1,
  },
  backgroundColor: "$bg",
  minHeight: "100%",
  transition: "background-color 200ms ease-in-out",
  "*": {
    transition: "background-color 200ms ease-in-out",
  },
})

export const PageLayoutMain = styled("main", {
  flex: "1",
  paddingLeft: "$md",
  paddingRight: "$md",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  "@bp3": {
    width: "90ch",
  },
})
