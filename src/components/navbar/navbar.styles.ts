import { styled } from "src/ui/stitches.config"

export const NavbarContainer = styled("nav", {
  height: 75,
  position: "sticky",
  top: 0,
  backgroundColor: "$bg-transparent",
  backdropFilter: "blur(10px)",
  padding: "0 $sm",
  display: "grid",
  placeItems: "center",
})

export const NavbarMain = styled("div", {
  justifyContent: "space-between",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  display: "flex",
  alignItems: "center",
  "@bp3": {
    width: 1000,
  },
})
