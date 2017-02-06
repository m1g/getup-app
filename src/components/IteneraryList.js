import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { graphql } from 'react-apollo'
import TripNew from './TripNew'

// import withAuth from '../utils/withAuth'

import { queryUserOwnedTrips } from '../graphql'

@graphql(...queryUserOwnedTrips())
export default class IteneraryList extends Component {

  trips () {
    if (this.props.queryUserOwnedTrips.loading) {
      return (
        <ul>
          <li>Loading...</li>
        </ul>
      )
    }
    return this.props.queryUserOwnedTrips.user.ownedTrips.map((trip, i) => {
      return (
        <li key={i}>
          <div className='info'>
            <h2><Link to={`/itenerary/${trip.id}`}>{trip.name}</Link></h2>

          </div>
          <div className='trips-cost'>
            <h2>$300/p</h2>
            <p>({trip.memberships.length} invited)</p>
          </div>
        </li>
      )
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
        <ul className='itenerary-item'>
          <li>
            <ul>
              {this.trips()}
            </ul>
          </li>
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
