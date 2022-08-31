import { styled } from "src/themes/stitches.config"
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
  marginBottom: "$xl",
  padding: "$md",
  borderRadius: "$lg",
  backgroundColor: "$ui",
  "&:hover": {
    backgroundColor: "$ui-hovered",
  },
  boxShadow: "$low",
})

export const ArticleDate = styled(Text, {
  marginBottom: "$xs",
  color: "$text-hi-gray",
  fontSize: "$xs",
})

export const ArticleTitle = styled(Heading, {
  fontWeight: 500,
  marginBottom: "$xxs",
  fontSize: "$2xl",
})

export const ArticleDescription = styled(Text, { marginBottom: "$xs" })

export const ArticleReadMore = styled(Text, { color: "$text-lo" })
