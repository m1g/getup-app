import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Hotels extends Component {

  render () {
    return (
      <div className='hotels-background'>
        <header className='hotels-header'>
          <h2>Hotels</h2>
        </header>
        <div className='hotels-wrapper'>
          <div className='checkout-in'>
            <div className='hotel'>
              <input type='text' placeholder='Name of Hotel' />
            </div>
            <div className='hotel-info'>
              <div>
                <h3>Check-In</h3>
              </div>
              <div>
                <input type='time' />
                <input type='date' />
              </div>
            </div>
            <div className='hotel-info'>
              <div>
                <h3>Check-Out</h3>
              </div>
              <div>
                <input type='time' />
                <input type='date' />
              </div>
            </div>
          </div>
          <div className='hotels-rooms'>
            <div className='link-box'>
              <h3>Number of rooms</h3>
              <input type='number' min='1' max='10' />
            </div>
            <div>
              <input type='number' placeholder='Cost' />
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
        <footer className='hotels-footer'>
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
