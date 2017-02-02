import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ExtraCosts extends Component {

  render () {
    return (
      <div className='profile-background'>
        <header className='profile-header'>
          <h2>Extra Costs</h2>
        </header>
        <footer className='profile-footer'>
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
