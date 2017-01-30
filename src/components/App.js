import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout'
import Login from './Login'
import Explore from './Explore'
import NewItenerary from './NewItenerary'
import Profile from './Profile'

export default class App extends Component {

  render () {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    )
  }
}
