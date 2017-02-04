import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'
import update from 'immutability-helper'

import {mutationCreateTrip, queryUserOwnedTrips} from '../graphql/'
import { browserHistory } from 'react-router'

@withAuth
@graphql(...mutationCreateTrip())
export default class TripNew extends Component {

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
    })
    // browserHistory.push('/itenerary/foo-bar')
  }

  _newTripChange = (event) => {
    this.setState({ newTripName: event.target.value })
  }

  render () {
    return (
      <section className='itenerary-section'>
        <form onSubmit={this._createTrip}>
          <p>Enter the name of your Trip. PRO TIP: Using the name of the location will help your friends make quicker decisions</p>
          <input value={this.state.newTripName} onChange={this._newTripChange} type='text' placeholder='Trip Name' />
          <div className='itenerary-create'>
            <p><a href=''>Invite friends</a></p>
            <button type='submit'>Create Trip</button>
          </div>
        </form>
      </section>
    )
  }
}
