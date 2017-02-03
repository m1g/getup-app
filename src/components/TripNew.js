import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'
import update from 'immutability-helper'

import CreateTrip from '../graphql/mutation/CreateTrip.gql'

import { browserHistory } from 'react-router'

@withAuth
@graphql(CreateTrip, { name: 'createTrip' })
export default class TripNew extends Component {

  state = {
    newTripName: ''
  }

  _createTrip = (event) => {
    event.preventDefault()
    this.props.createTrip({
      variables: {
        ownerId: this.props.client.userId,
        name: this.state.newTripName
      },
      updateQueries: {
        UserOwnedTrips: (prev, { mutationResult }) => {
          const trip = mutationResult.data.createTrip
          return update(prev, { user: { ownedFamilies: { $push: [trip] } } })
        }
      }
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
