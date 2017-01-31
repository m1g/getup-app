import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Layout from './Layout'
import Explore from './Explore'
import NewItenerary from './NewItenerary'
import Profile from './Profile'
import Login from './Login'

export default class App extends Component {

  render () {
    return <Router>
      <Route path='/' component={Layout}>
        <IndexRoute component={Login} />
        <Route path='explore' component={Explore} />
        <Route path='newItenerary' component={NewItenerary}>
          <Route path='profile' component={Profile} />
        </Route>
      </Route>
    </Router>
  }
}
