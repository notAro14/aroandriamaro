import { styled } from "src/themes/stitches.config"

const Text = styled("p", {
  color: "$text-functional",
  fontWeight: "$extra-light",
  fontSize: "$lg",
  fontFamily: "$primary",
  lineHeight: 1.6,
  "@bp1": {
    lineHeight: 1.7,
  },
})

export default Text
