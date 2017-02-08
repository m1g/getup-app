import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { browserHistory, withRouter } from 'react-router'
import ui from '../ui'

import {
  mutationCreateLineItem,
  queryUserOwnedTrips,
  queryTrip
} from '../graphql'

@withRouter
@graphql(...mutationCreateLineItem())
class AddLineItem extends Component {

  state = {
    newMemberName: '',
    newMemberEmail: ''
  }

  _addLineItem = (event) => {
    event.preventDefault()
    this.props.mutationCreateLineItem({
      variables: {
        tripId: this.props.params.id,
        type: this.props.type,
        cost: Number(this.refs.cost.value),
        arriveAt: this.refs.arriveAt.value,
        departAt: this.refs.departAt.value,
        arrivingAirport: this.refs.arrivingAirport.value,
        arrivingAirline: this.refs.arrivingAirline.value,
        departingAirport: this.refs.departingAirport.value,
        departingAirline: this.refs.departingAirline.value
      },
      refetchQueries: [
        { query: queryUserOwnedTrips(false) },
        { query: queryTrip(false), variables: { id: this.props.params.id } }
      ]
    }).then(() => {
      browserHistory.push('/itenerary/' + this.props.params.id)
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
              <input type='text' ref='departingAirport' placeholder='Departing Airport' />
              <input type='text' ref='departingAirline' placeholder='Airline' />
            </div>
            <div className='flight-info'>
              <input type='datetime-local' ref='departAt' />
            </div>
          </div>
          <div className='depart-return'>
            <div className='airport'>
              <input type='text' ref='arrivingAirport' placeholder='Returning Airport' />
              <input type='text' ref='arrivingAirline' placeholder='Airline' />
            </div>
            <div className='flight-info'>
              <input type='datetime-local' ref='arriveAt' />
            </div>
          </div>
          <div className='flight-cost'>
            <div>
              <input type='number' placeholder='Cost' ref='cost' />
            </div>
          </div>
          <div className='list'>
            <div>
              <button className='cancel-button'>Cancel</button>
            </div>
            <div>
              <button className='add-button' onClick={this._addLineItem}>Add to List</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddLineItem
