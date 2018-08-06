import styled from "styled-components"

import { Nav } from "@atoms"

export default styled.section`
  ${p => p.theme.css.containerWidth};
  margin-top: ${p => p.theme.spacing.mult(10)}px;

  p {
    line-height: 40px;
    font-size: 24px;
  }

  ${Nav} {
    margin-top: ${p => p.theme.spacing.mult(5)}px;
  }

  @media (max-width: ${p => p.theme.responsive.limits.medium}px) {
    margin-top: ${p => p.theme.spacing.mult(7)}px;

    h1 {
      font-size: 32px;
      line-height: 40px;
      margin: 0 0 ${p => p.theme.spacing.mult(4)}px 0;
    }
    h2 {
      font-size: 24px;
      line-height: 36px;
      margin: 0 0 ${p => p.theme.spacing.mult(4)}px 0;
    }
    h3 {
      font-size: 20px;
      line-height: 30px;
      margin: 0 0 ${p => p.theme.spacing.mult(4)}px 0;
    }
    p, a {
      font-size: 16px;
      line-height: 24px;
    }
    ${Nav} {
      margin: ${p => p.theme.spacing.mult(4)}px 0 0 0;
    }



  }
`
