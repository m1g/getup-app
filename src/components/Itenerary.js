import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import InviteFriends from './InviteFriends'
import Time from './Time'
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

  lineItems () {
    const { loading, Trip } = this.props.queryTrip

    if (loading) return <li>Loading...</li>
    return Trip.lineItems.map((lineItem, i) => {
      switch (lineItem.type) {
        case 'flight':
          return <li key={i}>
            <p>Flight leaves home<Time stamp={lineItem.departAt} /></p>
            <div>
              <p>
                {lineItem.departingAirport}
              </p>
              <p>
                {lineItem.departingAirline}
              </p>
              <p>
                <span>{lineItem.cost}</span>
              </p>
            </div>
            <p>Flight departs destination<Time stamp={lineItem.arriveAt} /></p>
            <div>
              <p>
                {lineItem.arrivingAirport}
              </p>
              <p>
                {lineItem.arrivingAirline}
              </p>
              <p>
                <span>{lineItem.cost}</span>
              </p>
            </div>
          </li>
        case 'hotel':
          return <li key={i}>
            Hotel
            {lineItem.cost}
          </li>
        default:
          return <li key={i}>
            additional cost
            {lineItem.cost}
          </li>
      }
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
        </section>
        <section className='itenerary-line-items'>
          <ul>
            {this.lineItems()}
          </ul>
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
