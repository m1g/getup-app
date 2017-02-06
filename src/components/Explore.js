import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import {mutationCreateTrip, queryUserOwnedTrips} from '../graphql/'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'

import mainLogo from '../images/logo.png'

@withAuth
@graphql(...mutationCreateTrip())
export default class Explore extends Component {

  state = {
    newTripName: ''
  }

  _createTrip = (event) => {
    event.preventDefault()
    this.props.mutationCreateTrip({
      variables: {
        ownerId: this.props.client.userId,
        name: this.state.newTripName
      },
      refetchQueries: [
        {
          query: queryUserOwnedTrips(false)
        }
      ]
    }).then(({data}) => {
      browserHistory.push(`/itenerary/${data.createTrip.id}`)
    })
  }

  _newTripChange = (event) => {
    this.setState({ newTripName: event.target.value })
  }

  render () {
    return (
      <div>
        <header className='explore-header'>
          <img src={mainLogo} alt='main logo' />
          <form onSubmit={this._createTrip}>
            <input
              value={this.state.newTripName}
              onChange={this._newTripChange}
              type='text'
              placeholder='Enter your Trip Name'
            />
            <button type='submit' style={{ visibility: 'hidden', position: 'absolute' }}>GO</button>
          </form>
        </header>
        <section className='explore-divider'>
          <div>
            <h2>Explore</h2>
          </div>
        </section>
        <section className='explore-section'>
          <a href='trips.html'>
            <div className='item1'>
              <figcaption>Everyday People Party - New York</figcaption>
            </div>
          </a>
          <div className='item2'>
            <figcaption>Bonfire Getup - San Francisco</figcaption>
          </div>
          <div className='item3'>
            <figcaption>Bahamas Cruise - Miami</figcaption>
          </div>
        </section>
        <footer className='explore-footer'>
          <nav>
            <ul>
              <li><Link activeClassName='is-active' to='/explore' onlyActiveOnIndex><i className='fa fa-compass fa-2x' aria-hidden='true' /></Link></li>
              <li><Link to='/itenerary'><i className='fa fa-suitcase fa-2x' aria-hidden='true' /></Link></li>
              <li><Link to='/profile'><i className='fa fa-user fa-2x' aria-hidden='true' /></Link></li>
            </ul>
          </nav>
        </footer>
      </div>
    )
  }
}
