import { styled, theme } from "lib/stitches.config"

const Link = styled("a", {
  "fontWeight": 200,
  "fontFamily": theme.fonts.primary,
  "fontSize": theme.fontSizes.lg,
  "color": theme.colors.brand,
  "&:hover": {
    cursor: "pointer",
    color: theme.colors["brand-hover"],
  },
})

export default Link
