import { styled, theme } from "src/themes/stitches.config"
import Link from "src/ui/link"
import Box from "src/ui/box"
import Text from "src/ui/text"
import Heading from "src/ui/heading"

export const ArticleLink = styled(Link, {
  fontSize: "inherit",
  textDecoration: "none",
  color: "inherit",
})

export const ArticleContainer = styled(Box, {
  marginBottom: theme.space.xl,
  padding: theme.space.md,
  borderRadius: theme.radii.lg,
  backgroundColor: theme.colors.ui,
  "&:hover": {
    backgroundColor: theme.colors["ui-hovered"],
  },
  boxShadow: theme.shadows.low,
})

export const ArticleDate = styled(Text, {
  marginBottom: theme.space.xs,
  color: theme.colors["text-functional"],
  fontSize: theme.fontSizes.xs,
})

export const ArticleTitle = styled(Heading, {
  fontWeight: 500,
  marginBottom: theme.space.xxs,
  fontSize: theme.fontSizes["2xl"],
})

export const ArticleDescription = styled(Text, { marginBottom: theme.space.xs })

export const ArticleReadMore = styled(Text, {
  color: theme.colors["text-vibrant-low"],
})
