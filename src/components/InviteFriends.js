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
        <form onSubmit={this._addMember}>
          <h3>Invite a Friend</h3>
          <input
            type='text'
            value={this.state.newMemberName}
            name='newMemberName'
            onChange={this._changed}
            placeholder='Name'
          />
          <input
            type='text'
            value={this.state.newMemberEmail}
            name='newMemberEmail'
            onChange={this._changed}
            placeholder='Email Address'
          />
          <button type='submit' className='btn'>Add Friend</button>
        </form>
      </div>
    )
  }
}

export default InviteFriends
