import { styled } from "src/themes/stitches.config"

const Link = styled("a", {
  fontWeight: 200,
  fontFamily: "$primary",
  fontSize: "$lg",
  color: "$text-lo",
  "&:hover": {
    cursor: "pointer",
  },
  variants: {
    noUnderline: {
      true: {
        textDecoration: "none",
      },
    },
  },
})

export default Link
