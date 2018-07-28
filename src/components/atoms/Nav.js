import styled from "styled-components"

export default styled.nav`
  display: flex;
  flex-flow: row nowrap;

  a {
    padding-bottom: ${p => p.theme.spacing.mult(0.5)}px;
    text-transform: uppercase;

    &:not(:first-child) {
      margin-left: ${p => p.theme.spacing.mult(2)}px;
    }
  }
`
