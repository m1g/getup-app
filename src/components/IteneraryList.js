import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { graphql } from 'react-apollo'
import TripNew from './TripNew'

// import withAuth from '../utils/withAuth'

import UserOwnedTrips from '../graphql/query/UserOwnedTrips.gql'

// @withAuth
@graphql(UserOwnedTrips, { name: 'userOwnedTrips' })
export default class IteneraryList extends Component {

  trips () {
    if (this.props.userOwnedTrips.loading) {
      return <li>Loading...</li>
    }
    return this.props.userOwnedTrips.user.ownedTrips.map((trip, i) => {
      return <li key={i}>{trip.name}</li>
    })
  }

  render () {
    return (
      <div className='itenerary-background'>
        <header className='itenerary-header'>
          <h2>Itenerary</h2>
        </header>
        <div className='itenerary-selectors'>
          <button>List of Trips</button>
        </div>
        <ul>
          {this.trips()}
        </ul>
        <TripNew />
        <footer className='itenerary-footer'>
          <nav>
            <ul>
              <li><Link to='/explore'><i className='fa fa-compass fa-2x' aria-hidden='true' /></Link></li>
              <li><Link to='/itenerary'><i className='fa fa-suitcase fa-2x' aria-hidden='true' /></Link></li>
              <li><Link to='/profile'><i className='fa fa-user fa-2x' aria-hidden='true' /></Link></li>
            </ul>
          </nav>
        </footer>
      </div>
    )
  }
}
