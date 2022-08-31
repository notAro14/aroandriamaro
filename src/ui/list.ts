import { styled } from "src/themes/stitches.config"

const List = styled("ul", {
  display: "flex",
  flexDirection: "column",
  variants: {
    spacing: {
      xxs: {
        gap: "$xxs",
      },
      xs: {
        gap: "$xs",
      },
      sm: {
        gap: "$sm",
      },
      md: {
        gap: "$md",
      },
      lg: {
        gap: "$lg",
      },
      xl: {
        gap: "$xl",
      },
      "2xl": {
        gap: "$2xl",
      },
    },
    listStyle: {
      none: {
        listStyleType: "none",
      },
    },
  },
  defaultVariants: {
    spacing: "xxs",
    listStyle: "none",
  },
})

export default List
