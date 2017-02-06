import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import InviteFriends from './InviteFriends'
import ui from '../ui'

import { graphql } from 'react-apollo'

import { queryTrip } from '../graphql'

@graphql(...queryTrip({
  options: props => ({ variables: {id: props.params.id} })
}))
export default class Itenerary extends Component {

  _inviteFriends = () => {
    ui.displayModal(<InviteFriends id={this.props.params.id} />)
  }

  _clickAddItem = () => {
    browserHistory.push(window.location + '/newItem')
  }

  tripName () {
    const { loading, Trip } = this.props.queryTrip

    if (loading) return '...'
    return Trip.name
  }

  members () {
    const { loading, Trip } = this.props.queryTrip

    if (loading) return <li>Loading...</li>
    return Trip.memberships.map((member, i) => {
      return <li key={i}>
        {member.name}, {member.email}
      </li>
    })
  }

  render () {
    return (
      <div className='itenerary-background'>
        <header className='itenerary-header'>
          <h2>{this.tripName()}</h2>
        </header>
        <section className='itenerary-section'>
          <div className='itenerary-create'>
            <button className='itenerary-friends' type='submit' onClick={this._inviteFriends}>Invite Friends</button>
            <button type='submit' onClick={this._clickAddItem}>Add Line Item</button>
          </div>
        </section>
        <section className='itenerary-members'>
          <h4>Invited</h4>
          <ul>
            {this.members()}
          </ul>
          {/*
          This will add list items to the itenerary
          <ul className='itenerary-items'>
          </ul> */}
        </section>
        <footer className='itenerary-footer'>
          <nav>
            <ul>
              <li><Link to='/explore'><i className='fa fa-compass fa-2x' aria-hidden='true' /></Link></li>
              <li><Link to='/itenerary'><i className='fa fa-suitcase fa-2x' aria-hidden='true' /></Link></li>
              <li><Link to='/profile'><i className='fa fa-user fa-2x' aria-hidden='true' /></Link></li>
            </ul>
          </nav>
        </footer>
        {this.props.children}
      </div>
    )
  }
}
