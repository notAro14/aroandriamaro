import { blue, slate, blueDark, slateDark } from "@radix-ui/colors"

const computeColors = (
  colors: Record<string, string>,
  type: "brand" | "gray" | "accent"
) =>
  Object.keys(colors).reduce((acc, k, idx) => {
    acc[`${type}${idx + 1}`] = colors[k]
    return acc
  }, {} as Record<string, string>)

export const brandColor = computeColors(blue, "brand")
export const brandDarkColor = computeColors(blueDark, "brand")
export const grayColor = computeColors(slate, "gray")
export const grayDarkColor = computeColors(slateDark, "gray")
