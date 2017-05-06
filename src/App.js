import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { About, Article, Contact, Header, Home } from './components';

class Layout extends PureComponent {
  render() {
    return <BrowserRouter>
      <div>
        <Header/>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/work/:slug" component={Article} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>;
  }
}

Layout.propTypes = {};

export default Layout;
