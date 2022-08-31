import { styled } from "src/themes/stitches.config"

export const PageLayoutContainer = styled("section", {
  flexDirection: "column",
  display: "flex",
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
  paddingTop: "$3xl",
  paddingBottom: "$3xl",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  "@bp3": {
    width: 1000,
  },
})
