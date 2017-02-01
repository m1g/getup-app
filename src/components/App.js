import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import { auth } from '../utils/AuthService'

import Layout from './Layout'
import Explore from './Explore'
import Itenerary from './Itenerary'
import Profile from './Profile'
import Login from './Login'

export default class App extends Component {

  // constructor (props) {
  //   super(props)
  //
  //   auth.onUpdate = () => this.forceUpdate()
  // }

  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Login} />
        <Route path='explore' component={Explore} />
        <Route path='itenerary' component={Itenerary} />
        <Route path='profile' component={Profile} />
        {/* </Route> */}
      </Route>
    </Router>
  }
}
