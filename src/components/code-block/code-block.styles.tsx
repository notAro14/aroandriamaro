import Flex from "src/ui/flex"
import { styled } from "src/ui/stitches.config"

export const CodeBlockLanguage = styled(Flex, {
  alignSelf: "flex-start",
  color: "$text-lo",
  textTransform: "uppercase",
  marginTop: "$md",
  paddingTop: "$xxs",
  paddingBottom: "$xxs",
  paddingRight: "$xs",
  paddingLeft: "$xs",
  fontFamily: "$tertiary",
})

export const Pre = styled("pre", {
  overflow: "auto",
  padding: "$lg",
  marginBottom: "$md",
  fontFamily: "$tertiary",
  fontSize: "$lg",
  borderRadius: "$lg",
  boxShadow: "$low",
})
