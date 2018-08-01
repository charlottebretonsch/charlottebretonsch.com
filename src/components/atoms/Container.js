import styled from "styled-components"

export default styled.main`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto ${p => p.theme.spacing.mult(15)}px;
`
