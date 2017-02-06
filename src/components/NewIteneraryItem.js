import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

export default class NewItenerary extends Component {

  _dismissModal = () => {
    browserHistory.goBack()
  }

  render () {
    return <div className='modal'>
      <div className='item-inner'>
        <div>
          <button onClick={this._dismissModal}>
            <i className='fa fa-times fa-2x' aria-hidden='true' />
          </button>
        </div>
        <ul className='content'>
          <li>
            <Link to='/flights'><h2>Flights</h2></Link>
          </li>
          <li>
            <Link to='/hotels'><h2>Hotels</h2></Link>
          </li>
          <li>
            <Link to='/extracosts'><h2>Extra Costs</h2></Link>
          </li>
        </ul>
      </div>
    </div>
  }
}
