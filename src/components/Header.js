import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Header extends PureComponent {
  render () {
    return (

      <header>

        <Link to="/">
          <h1>Charlotte Breton Schreiner</h1>
        </Link>

        <nav>
          <ul>
            <li>
              <Link to='/'>Work</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>

      </header>

    );
  }
}

export default Header
