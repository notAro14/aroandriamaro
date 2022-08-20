import tinycolor from "tinycolor2"

export default function changeColorAlpha(color: string, alpha: number) {
  return tinycolor(color).setAlpha(alpha).toHslString()
}
