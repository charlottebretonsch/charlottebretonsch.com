import styled from "styled-components"

import { Nav } from "@atoms"

export default styled.section`
  margin-top: ${p => p.theme.spacing.mult(10)}px;
  width: ${p => p.theme.spacing.containerWidth}px;

  p {
    line-height: 40px;
    font-size: 24px;
  }

  ${Nav} {
    margin-top: ${p => p.theme.spacing.mult(5)}px;
  }
`
