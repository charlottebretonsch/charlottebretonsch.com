import React from "react"
import ReactDOM from "react-dom"
import { Router } from "react-router-dom"
import ReactGA from "react-ga"
import { ThemeProvider, injectGlobal, keyframes } from "styled-components"
import AOS from "aos"
import "aos/dist/aos.css"

import App from "./components/App"
import history from "./history"
import theme from "./theme"

AOS.init()
ReactGA.initialize("UA-53041838-2")

const linkLine = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:400,700');

  body {
    color: ${theme.colours.dark};
    font-family: 'Work Sans', sans-serif;
    margin: 0;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  a {
    border-bottom: 2px solid ${theme.colours.dark};
    color: inherit;
    padding: 0 ${theme.spacing.mult(0.25)}px ${theme.spacing.mult(0.5)}px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;

    &::after {
      background: ${theme.colours.grey};
      content: "";
      height: 2px;
      left: 0;
      opacity: 0.7;
      position: absolute;
      top: 100%;
      width: 0%;
    }

    &:hover::after {
      animation: 1.5s ${linkLine} ease-in forwards;
    }
  }
`

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root"),
)
