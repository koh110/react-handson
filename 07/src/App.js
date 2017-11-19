import React from 'react'
import { Router, Route } from 'react-router'
import { Switch } from 'react-router-dom'

import Top from './Top'
import TodoPage from './TodoPage'

export default class App extends React.Component {

  render() {
    const { history } = this.props

    return (
      <Router history={history}>
        <Switch>
          <Route path="/todo/:index" component={TodoPage} />
          <Route path="/" component={Top} />
        </Switch>
      </Router>
    )
  }
}
