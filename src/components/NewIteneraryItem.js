import React, { Component } from 'react'
import { Link, browserHistory, withRouter } from 'react-router'

@withRouter
export default class NewItenerary extends Component {

  _dismissModal = () => {
    browserHistory.goBack()
  }

  render () {
    const location = this.props.router.location.pathname
    return <div className='modal'>
      <div className='item-inner'>
        <div>
          <button onClick={this._dismissModal}>
            <i className='fa fa-times fa-2x' aria-hidden='true' />
          </button>
        </div>
        <ul className='content'>
          <li>
            <Link to={`${location}/flights`}><h2>Flights</h2></Link>
          </li>
          <li>
            <Link to={`${location}/hotels`}><h2>Hotels</h2></Link>
          </li>
          <li>
            <Link to={`${location}/extracosts`}><h2>Extra Costs</h2></Link>
          </li>
        </ul>
      </div>
    </div>
  }
}
