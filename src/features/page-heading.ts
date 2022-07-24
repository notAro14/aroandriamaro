import { styled } from "src/lib/stitches.config"
import Heading from "src/shared/heading"

const PageHeading = styled(Heading, {
  "$$comp-page-heading-font-size": "$fontSizes$2xl",
  "$$comp-page-heading-space-after": "$space$md",

  fontSize: "$$comp-page-heading-font-size",
  marginBottom: "$$comp-page-heading-space-after",
})

export default PageHeading
