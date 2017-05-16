import React, { PureComponent } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Header extends PureComponent {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      document.querySelector('header').scrollIntoView({ behavior: 'smooth' })
    }
  }

  render () {
    return (

      <header>

        <Link to='/'>
          <h1>Charlotte Breton Schreiner</h1>
        </Link>

        <nav>
          <ul>
            <li>
              <NavLink exact to='/'>Work</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </nav>

      </header>

    )
  }
}

export default Header
