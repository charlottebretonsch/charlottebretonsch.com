import React, { PureComponent } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.header`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: ${p => p.theme.spacing.mult(0.5)}px;
  padding: ${p => p.theme.spacing.mult(5)}px 0;
  position: relative;

  &::after {
    background: ${p => p.theme.colours.grey};
    content: "";
    height: ${p => p.theme.spacing.mult(0.5)}px;
    left: -50vw;
    position: absolute;
    right: -50vw;
    top: 100%;
  }

  a {
    border: none;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
  }
`

const Header = () => (
  <Container>
    <Link to="/">Charlotte Breton Schreiner</Link>
  </Container>
)

export default Header
