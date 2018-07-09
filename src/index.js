import React from "react"
import ReactDOM from "react-dom"
import { Router } from "react-router-dom"
import ReactGA from "react-ga"
import AOS from "aos"
import "aos/dist/aos.css"

import App from "./components/App"
import history from "./history"

AOS.init()
ReactGA.initialize("UA-53041838-2")

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
)
