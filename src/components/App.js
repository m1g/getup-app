import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import { ApolloProvider } from 'react-apollo'

import Layout from './Layout'
import Explore from './Explore'
import Itenerary from './Itenerary'
import IteneraryList from './IteneraryList'
import Profile from './Profile'
import Login from './Login'
import NewIteneraryItem from './NewIteneraryItem'
import ExtraCosts from './ExtraCosts'
import Flights from './Flights'
import Hotels from './Hotels'

export default class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Login} />
        <Route path='explore' component={Explore} />
        <Route path='itenerary' component={IteneraryList} />
        <Route path='flights' component={Flights} />
        <Route path='hotels' component={Hotels} />
        <Route path='extracosts' component={ExtraCosts} />
        <Route path='itenerary/:id' component={Itenerary}>
          <Route path='newItem' component={NewIteneraryItem} />
        </Route>
        <Route path='profile' component={Profile} />
      </Route>
    </Router>
  }
}
