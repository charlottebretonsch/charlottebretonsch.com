import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

import '../style/Header.styl';

class Header extends PureComponent {
  render() {
    return <header>
      <h1>Charlotte Breton Schreiner</h1>

      <nav>
        <ul>
          <li><Link to="/">Work</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/work/personas">Article</Link></li>
        </ul>
      </nav>
    </header>;
  }
}

export default Header;
