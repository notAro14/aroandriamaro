import { styled, theme } from "src/lib/stitches.config"

const Link = styled("a", {
  fontWeight: 200,
  fontFamily: theme.fonts.primary,
  fontSize: theme.fontSizes.lg,
  color: "$text-lo",
  "&:hover": {
    cursor: "pointer",
  },
})

export default Link
