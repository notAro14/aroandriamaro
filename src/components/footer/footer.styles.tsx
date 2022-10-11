import Text from "src/ui/text"
import { styled, theme } from "src/themes/stitches.config"
import Link from "src/ui/link"

export const FooterContainer = styled("footer", {
  height: 100,
  backgroundColor: "$ui",
  display: "grid",
  placeItems: "center",
})

export const FooterMain = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingRight: "$md",
  paddingLeft: "$md",
  flexDirection: "column",
  gap: "$xs",
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  fontWeight: 100,
  fontSize: theme.fontSizes.md,
  "@bp2": {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 0,
    width: "100%",
  },
  "@bp3": {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 0,
    width: 1000,
  },
})

export const CopyrightContainer = styled(Text, {
  fontSize: "inherit",
  display: "flex",
  alignItems: "baseline",
  gap: theme.space.xs,
})
export const CopyRightSymbol = styled(Text, {
  fontSize: "inherit",
  color: "$text-lo",
})

export const SocialLinkContainer = styled("li", {
  color: "$text-functional",
  display: "flex",
  alignItems: "center",
  gap: "$xs",
})
export const SocialLink = styled(Link, {
  textDecoration: "none",
  fontSize: theme.fontSizes.lg,
  color: "$text-functional",
  textTransform: "capitalize",
  transition: "color 150ms ease-in-out",
  "&:hover": {
    cursor: "pointer",
    color: theme.colors["text-vibrant-low"],
  },
})
