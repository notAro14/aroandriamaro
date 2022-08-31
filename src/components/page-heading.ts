import { styled, theme } from "src/themes/stitches.config"
import Heading from "src/ui/heading"

const PageHeading = styled(Heading, {
  fontSize: theme.fontSizes["2xl"],
  marginBottom: theme.space.md,
})

export default PageHeading
