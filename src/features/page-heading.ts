import { styled, theme } from "lib/stitches.config"
import Heading from "shared/heading"

const PageHeading = styled(Heading, {
  fontWeight: 500,
  fontSize: theme.fontSizes["3xl"],
  marginBottom: theme.space.md,
})

export default PageHeading
