import { css } from "styled-components"

const baseSpacing = 8
const spacingMult = n => n * baseSpacing

const lightGrey = "#f1f1f1"

const responsive = {
  container: {
    large: spacingMult(110),
    medium: spacingMult(100),
  },
  limits: {
    medium: spacingMult(160),
    small: spacingMult(112),
  },
}

export default {
  colours: {
    accent: "#d00149",
    dark: "#333333",
    grey: "#dfdfdf",
    lightGrey,
    light: "#ffffff",
  },
  css: {
    containerWidth: css`
      width: ${responsive.container.large}px;

      @media (max-width: ${responsive.limits.medium}px) {
        width: ${responsive.container.medium}px;
      }
      @media (max-width: ${responsive.limits.small}px) {
        padding: 0 ${spacingMult(3)}px;
        width: 100%;
      }
    `,
    horizontalRow: css`
      background: ${lightGrey};
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      width: 100%;
    `,
  },
  fonts: {
    weight: {
      light: 300,
      medium: 500,
    },
  },
  responsive,
  spacing: {
    base: baseSpacing,
    mult: spacingMult,
  },
}
