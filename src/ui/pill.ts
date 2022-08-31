import { styled } from "src/themes/stitches.config"

const Pill = styled("span", {
  display: "flex",
  alignItems: "center",
  color: "$text-hi",
  gap: "$xs",
  backgroundColor: "$ui",
  borderRadius: "$lg",
  paddingTop: "$xxs",
  paddingBottom: "$xxs",
  paddingLeft: "$xs",
  paddingRight: "$xs",
  boxShadow: "$low",
  "&:hover": {
    backgroundColor: "$ui-hovered",
  },
})
export default Pill
