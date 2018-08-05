import styled from "styled-components"

export default styled.nav`
  display: flex;
  flex-flow: row nowrap;

  a:not(:first-child) {
    margin-left: ${p => p.theme.spacing.mult(2)}px;
  }
`
