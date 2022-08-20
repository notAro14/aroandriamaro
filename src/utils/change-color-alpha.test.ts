import changeColorAlpha from "./change-color-alpha"

const colorIn = "hsl(0, 10%, 10%)"
const alpha = 0.5
const colorOut = `hsla(0, 10%, 10%, ${alpha})`

it("Changes a color's alpha", () => {
  expect(changeColorAlpha(colorIn, alpha)).toEqual(colorOut)
})
