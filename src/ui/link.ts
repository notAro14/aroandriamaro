import { styled, theme } from "src/ui/stitches.config"

const Link = styled("a", {
  fontWeight: 200,
  fontFamily: theme.fonts.primary,
  fontSize: theme.fontSizes.lg,
  color: "$text-lo",
  "&:hover": {
    cursor: "pointer",
  },
  variants: {
    noUnderline: {
      true: {
        textDecoration: "none",
      },
    },
  },
})

export default Link
