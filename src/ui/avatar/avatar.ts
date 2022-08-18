import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { styled } from "src/ui/stitches.config"

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 50,
  height: 50,
  borderRadius: "100%",
  backgroundColor: "$ui",
})

const StyledImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
})

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$ui",
  color: "$text-vibrant",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
})

// Exports
export const Avatar = StyledAvatar
export const AvatarImage = StyledImage
export const AvatarFallback = StyledFallback

export default Avatar
