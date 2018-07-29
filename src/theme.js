import { css } from "styled-components"

const baseSpacing = 8
const spacingMult = n => n * baseSpacing
const containerWidth = spacingMult(110)

export default {
  colours: {
    accent: "#d00149",
    dark: "#333333",
    grey: "#dfdfdf",
    lightGrey: "#f1f1f1",
    light: "#ffffff",
  },
  container: css`
    width: ${containerWidth}px;
  `,
  fonts: {
    weight: {
      light: 300,
      medium: 500,
    },
  },
  spacing: {
    base: baseSpacing,
    containerWidth,
    mult: spacingMult,
  },
}
