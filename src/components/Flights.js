import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Flights extends Component {

  render () {
    return (
      <div className='flights-background'>
        <header className='flights-header'>
          <h2>Flights</h2>
        </header>
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
          <div className='list'>
            <div>
              <button className='cancel-button'><Link to='/itenerary'>Cancel</Link></button>
            </div>
            <div>
              <button className='add-button'><Link to='/itenerary'>Add to List</Link></button>
            </div>
          </div>
        </div>
        <footer className='flights-footer'>
          <nav>
            <ul>
              <li><Link to='/explore'><i className='fa fa-compass fa-2x' aria-hidden='true' /></Link></li>
              <li><Link to='/itenerary'><i className='fa fa-suitcase fa-2x' aria-hidden='true' /></Link></li>
              <li><Link to='/profile'><i className='fa fa-user fa-2x' aria-hidden='true' /></Link></li>
            </ul>
          </nav>
        </footer>
      </div>
    )
  }
}
