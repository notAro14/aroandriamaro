import { styled, theme } from "src/lib/stitches.config"

const Text = styled("p", {
  color: theme.colors.text,
  fontWeight: 200,
  fontSize: theme.fontSizes.lg,
  fontFamily: theme.fonts.primary,
})

export default Text
