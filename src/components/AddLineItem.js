import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import ui from '../ui'

import {
  mutationCreateMembership,
  queryUserOwnedTrips
} from '../graphql'

@graphql(...mutationCreateMembership())
class InviteFriends extends Component {

  state = {
    newMemberName: '',
    newMemberEmail: ''
  }

  _addMember = (event) => {
    event.preventDefault()
    this.props.mutationCreateMembership({
      variables: {
        tripId: this.props.id,
        name: this.state.newMemberName,
        email: this.state.newMemberEmail
      },
      refetchQueries: [{ query: queryUserOwnedTrips(false) }]
    }).then(() => {
      ui.dismissModal()
    })
  }

  _changed = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    return (
      <div>
        <div className='flights-wrapper'>
          <div className='depart-return'>
            <div className='airport'>
              <input type='text' placeholder='Departing Airport' />
              <input type='text' placeholder='Airline' />
            </div>
            <div className='flight-info'>
              <input type='time' />
              <input type='date' />
            </div>
          </div>
          <div className='depart-return'>
            <div className='airport'>
              <input type='text' placeholder='Returning Airport' />
              <input type='text' placeholder='Airline' />
            </div>
            <div className='flight-info'>
              <input type='time' />
              <input type='date' />
            </div>
          </div>
          <div className='flight-cost'>
            <div>
              <input type='number' placeholder='Cost' />
            </div>
          </div>
          <div className='list'>
            <div>
              <button className='cancel-button'>Cancel</button>
            </div>
            <div>
              <button className='add-button'>Add to List</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InviteFriends
