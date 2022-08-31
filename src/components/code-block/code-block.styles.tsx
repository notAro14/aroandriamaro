import Flex from "src/ui/flex"
import { styled, theme } from "src/themes/stitches.config"

export const CodeBlockLanguage = styled(Flex, {
  alignSelf: "flex-start",
  color: theme.colors["text-vibrant-low"],
  textTransform: "uppercase",
  marginTop: theme.space.md,
  paddingTop: theme.space.xxs,
  paddingBottom: theme.space.xxs,
  paddingRight: theme.space.xs,
  paddingLeft: theme.space.xs,
  fontFamily: theme.fonts.mono,
})

export const Pre = styled("pre", {
  overflow: "auto",
  padding: theme.space.lg,
  marginBottom: theme.space.md,
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.lg,
  borderRadius: theme.radii.lg,
  boxShadow: theme.shadows.low,
})
