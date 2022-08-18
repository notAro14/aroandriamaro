import { FC, ReactNode } from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"

import { styled } from "src/lib/stitches.config"

const StyledContent = styled(SelectPrimitive.SelectContent, {
  overflow: "hidden",
  borderRadius: "$lg",
  backgroundColor: "$ui",
  fontFamily: "$primary",
  color: "$text-functional",
  //boxShadow: "$$component-select-content-shadow",
})
const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  fontFamily: "$primary",
  padding: "0 $md",
  lineHeight: 1,
  height: 35,
  borderRadius: "$lg",
  border: "none",
  backgroundColor: "$ui",
  color: "$text-functional",
  alignItems: "center",
  display: "inline-flex",
  gap: "$sm",
  textTransform: "capitalize",
  width: "fit-content",
  "&:hover": {
    backgroundColor: "$ui-hovered",
  },
  "&[data-placeholder]": {
    color: "$text-functional-low",
  },
  "&:focus": {
    outlineWidth: "2px",
    outlineColor: "$border-hovered",
    outlineStyle: "solid",
  },
})
const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  color: "$text-functional",
})
const StyledViewport = styled(SelectPrimitive.SelectViewport, {
  padding: "$sm",
})
const StyledLabel = styled(SelectPrimitive.Label, {
  padding: "0 $lg",
  color: "$text-functional",
  fontSize: "$sm",
})
export const StyledItem = styled(SelectPrimitive.Item, {
  all: "unset",
  height: 35,
  position: "relative",
  paddingLeft: "$lg",
  paddingRight: "$lg",
  borderRadius: "$lg",
  display: "flex",
  alignItems: "center",
  lineHeight: 1,
  userSelect: "none",
  textTransform: "capitalize",
  // TODO
  //"&[data-disabled]": {
  //  color: "$$component-select-item-disabled",
  //  pointerEvents: "none",
  //},
  "&[data-highlighted]": {
    backgroundColor: "$solid",
    color: "$text-fg-white",
  },
})
export const StyledItemText = styled(SelectPrimitive.ItemText, {})
export const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  margin: 5,
  backgroundColor: "$line",
})
export const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})
const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: "$ui",
  color: "$text-functional",
  cursor: "default",
}
const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
)
const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
)

const Content: FC<{ children: ReactNode }> = ({ children, ...props }) => {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  )
}

export const SelectTrigger = StyledTrigger
export const SelectValue = SelectPrimitive.Value
export const SelectIcon = StyledIcon
export const SelectContent = Content
export const SelectViewport = StyledViewport
export const SelectGroup = SelectPrimitive.Group
export const SelectItem = StyledItem
export const SelectItemText = SelectPrimitive.ItemText
export const SelectItemIndicator = StyledItemIndicator
export const SelectLabel = StyledLabel
export const SelectSeparator = StyledSeparator
export const SelectScrollUpButton = StyledScrollUpButton
export const SelectScrollDownButton = StyledScrollDownButton
export const SelectCheckIcon = CheckIcon
export const SelectChevronDownIcon = ChevronDownIcon
export const SelectChevronUpIcon = ChevronUpIcon

const Select = SelectPrimitive.Root
export default Select
