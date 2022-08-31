const SHADOW_COLOR_KEY = "$colors$shadow"
export const shadows = {
  low: `0.3px 0.5px 0.7px hsl(${SHADOW_COLOR_KEY} / 0.34),
  0.4px 0.8px 1px -1.2px hsl(${SHADOW_COLOR_KEY} / 0.34),
  1px 2px 2.5px -2.5px hsl(${SHADOW_COLOR_KEY} / 0.34)`,
  medium: `0.3px 0.5px 0.7px hsl(${SHADOW_COLOR_KEY} / 0.36),
  0.8px 1.6px 2px -0.8px hsl(${SHADOW_COLOR_KEY} / 0.36),
  2.1px 4.1px 5.2px -1.7px hsl(${SHADOW_COLOR_KEY} / 0.36),
  5px 10px 12.6px -2.5px hsl(${SHADOW_COLOR_KEY} / 0.36)`,
  high: `0.3px 0.5px 0.7px hsl(${SHADOW_COLOR_KEY} / 0.34),
  1.5px 2.9px 3.7px -0.4px hsl(${SHADOW_COLOR_KEY} / 0.34),
  2.7px 5.4px 6.8px -0.7px hsl(${SHADOW_COLOR_KEY} / 0.34),
  4.5px 8.9px 11.2px -1.1px hsl(${SHADOW_COLOR_KEY} / 0.34),
  7.1px 14.3px 18px -1.4px hsl(${SHADOW_COLOR_KEY} / 0.34),
  11.2px 22.3px 28.1px -1.8px hsl(${SHADOW_COLOR_KEY} / 0.34),
  17px 33.9px 42.7px -2.1px hsl(${SHADOW_COLOR_KEY} / 0.34),
  25px 50px 62.9px -2.5px hsl(${SHADOW_COLOR_KEY} / 0.34)`,
}
export default shadows
