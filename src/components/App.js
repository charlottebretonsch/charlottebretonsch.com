import React from "react"
import { Route, Switch } from "react-router-dom"

import { Container } from "@atoms"
import { Article, Home } from "@pages"

const App = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:slug" component={Article} />
    </Switch>
  </Container>
)

export default App
