const baseSpacing = 8
const spacingMult = n => n * baseSpacing

export default {
  colours: {
    accent: "#d00149",
    dark: "#333333",
    grey: "#dfdfdf",
    lightGrey: "#f1f1f1",
    light: "#ffffff",
  },
  fonts: {
    weight: {
      light: 300,
      medium: 500,
    },
  },
  responsive: {
    container: {
      large: spacingMult(110),
      medium: spacingMult(100),
    },
    limits: {
      large: spacingMult(126),
      medium: spacingMult(112),
    },
  },
  spacing: {
    base: baseSpacing,
    mult: spacingMult,
  },
}
