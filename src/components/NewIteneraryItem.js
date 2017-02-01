import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class NewItenerary extends Component {

  _dismissModal = () => {
    browserHistory.goBack()
  }

  render () {
    return <div className='modal'>
      <div className='inner'>
        <ul>
          <li><h2>Flights</h2></li>
          <li><h2>Hotels</h2></li>
          <li><h2>Extra Costs</h2></li>
        </ul>
      </div>
      <div>
        <button onClick={this._dismissModal}>Cancel</button>
      </div>
    </div>
  }
}
