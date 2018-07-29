import React from "react"
import ReactDOM from "react-dom"
import { Router } from "react-router-dom"
import ReactGA from "react-ga"
import { ThemeProvider, injectGlobal } from "styled-components"
import AOS from "aos"
import "aos/dist/aos.css"

import App from "./components/App"
import history from "./history"
import theme from "./theme"

AOS.init()
ReactGA.initialize("UA-53041838-2")

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
  }

  a {
    border-bottom: 2px solid ${theme.colours.dark};
    color: inherit;
    text-decoration: none;
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
