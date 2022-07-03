import { styled, theme } from "src/lib/stitches.config"
import Heading from "src/shared/heading"

const PageHeading = styled(Heading, {
  fontWeight: 500,
  fontSize: theme.fontSizes["3xl"],
  marginBottom: theme.space.md,
})

export default PageHeading
