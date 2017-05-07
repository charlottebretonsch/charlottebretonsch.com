import React, { PureComponent } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { About, Article, Contact, Header, Home } from './components'

import '../style/reset.styl'
import '../style/main.styl'
import '../style/responsive.styl'

class Layout extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <div>

          <Route component={Header} />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route path='/work/:slug' component={Article} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

Layout.propTypes = {}

export default Layout