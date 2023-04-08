import { css } from "src/themes/stitches.config"

const link = css("a", {
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

export default link
