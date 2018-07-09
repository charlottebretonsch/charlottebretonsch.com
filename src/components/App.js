import React, { PureComponent } from "react"
import { Route, Switch } from "react-router-dom"

import { Header } from "@atoms"
import { Article, Home } from "@pages"

import "@style/reset.styl"
import "@style/main.styl"
import "@style/responsive.styl"

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:slug" component={Article} />
        </Switch>
      </div>
    )
  }
}

export default App
