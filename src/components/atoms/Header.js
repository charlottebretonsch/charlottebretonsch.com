/* This is the main header navigation with the logo */

import React, { PureComponent } from "react"
import { Link } from "react-router-dom"

class Header extends PureComponent {
  render() {
    return (
      <header>
        <Link to="/" className="container">
          Charlotte Breton Schreiner
        </Link>
      </header>
    )
  }
}

export default Header
