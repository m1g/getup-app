import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'
import update from 'immutability-helper'

import {mutationCreateLineItem, queryUserOwnedTrips} from '../graphql/'
import { browserHistory } from 'react-router'

@withAuth
@graphql(...mutationCreateLineItem())
export default class LineItemNew extends Component {

  state = {
    newItemName: ''
  }

  _createItem = (event) => {
    event.preventDefault()
    this.props.mutationCreateLineItem({
      variables: {
        tripId: this.props.client.tripId,
        type: this.props.client.type,
        cost: this.props.client.cost,
        description: this.props.client.description,
        arriveAt: this.props.client.arriveAt,
        departAt: this.props.client.departAt,
        additionalInfo: this.props.client.additionalInfo
      },
      refetchQueries: [
        {
          query: queryUserOwnedTrips(false)
        }
      ]
    })
    // browserHistory.push('/itenerary/foo-bar')
  }

  _newLineItemChange = (event) => {
    this.setState({ newLineItemName: event.target.value })
  }

  render () {
    return (
      <div>
        <ul>
          <li
            value={this.state.newLineItemName}
            onChange={this._newLineItemChange}
          >{this._createLineItem}
          </li>
        </ul>
      </div>
    )
  }
}
