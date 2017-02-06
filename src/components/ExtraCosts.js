import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ExtraCosts extends Component {

  render () {
    return (
      <div className='costs-background'>
        <header className='costs-header'>
          <h2>Extra Costs</h2>
        </header>
        <div className='costs-wrapper'>
          <div className='checkout-in'>
            <div className='cost'>
              <input type='text' className='name' placeholder='Name of Cost' />
              <input type='number' placeholder='Price' />
            </div>
          </div>
          {/* <div className='costs-rooms'>
            <div>
              <input type='number' placeholder='Cost' />
            </div>
          </div> */}
          <div className='list'>
            <div>
              <button className='cancel-button'><Link to='/itenerary'>Cancel</Link></button>
            </div>
            <div>
              <button className='add-button'><Link to='/itenerary'>Add to List</Link></button>
            </div>
          </div>
        </div>
        <footer className='costs-footer'>
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
