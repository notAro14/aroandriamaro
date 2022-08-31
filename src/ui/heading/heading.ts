import { styled } from "src/themes/stitches.config"

const Heading = styled("h2", {
  lineHeight: 1,
  fontWeight: "$medium",
  fontFamily: "$secondary",
  variants: {
    color: {
      functional: {
        color: "$text-functional",
      },
      "functional-low": {
        color: "$text-functional-low",
      },
      vibrant: {
        color: "$text-vibrant",
      },
      "vibrant-low": {
        color: "$text-vibrant-low",
      },
    },
  },
  defaultVariants: {
    color: "functional",
  },
})

export default Heading
