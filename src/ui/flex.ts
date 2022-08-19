import { styled } from "src/ui/stitches.config"
import Box from "src/ui/box"

const Flex = styled(Box, {
  display: "flex",
  variants: {
    direction: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
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
    align: {
      center: {
        alignItems: "center",
      },
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    justify: {
      center: {
        justifyContent: "center",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
      "space-between": {
        justifyContent: "space-between",
      },
      "space-around": {
        justifyContent: "space-around",
      },
      "space-evenly": {
        justifyContent: "space-evenly",
      },
    },
    wrap: {
      true: {
        flexWrap: "wrap",
      },
    },
  },
  defaultVariants: {
    spacing: "xxs",
    direction: "row",
  },
})

export default Flex
