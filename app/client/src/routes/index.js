import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home'
import NotFound from './notFound'
import Start from './start'

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Start} />
          <Route exact path='/Home' component={Home} />
          <Route exact component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter;