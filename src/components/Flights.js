import React, { Component } from 'react'
import { Link } from 'react-router'
import AddLineItem from './AddLineItem'

export default class Flights extends Component {

  render () {
    return (
      <div className='flights-background'>
        <header className='flights-header'>
          <h2>Flights</h2>
        </header>
        <AddLineItem type='flight' />
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
