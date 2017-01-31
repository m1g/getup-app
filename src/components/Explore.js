import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Explore extends Component {

  render () {
    return (
      <div>
        <header className='explore-header'>
          <img src='images/logo.png' alt='main logo' />
          <input type='text' placeholder='Where to get up' />
        </header>
        <section className='explore-divider'>
          <div>
            <h2>Explore</h2>
          </div>
        </section>
        <section className='explore-section'>
          <a href='trips.html'>
            <div className='item1'>
              <figcaption>Everyday People Party - New York</figcaption>
            </div>
          </a>
          <div className='item2'>
            <figcaption>Bonfire Getup - San Francisco</figcaption>
          </div>
          <div className='item3'>
            <figcaption>Bahamas Cruise - Miami</figcaption>
          </div>
        </section>
        <footer className='explore-footer'>
          <nav>
            <ul>
              <li><Link to='/explore'><i className='fa fa-compass fa-2x' aria-hidden='true' /></Link></li>
              <li><Link to='/newItenerary'><i className='fa fa-suitcase fa-2x' aria-hidden='true' /></Link></li>
              <li><Link to='/profile'><i className='fa fa-user fa-2x' aria-hidden='true' /></Link></li>
            </ul>
          </nav>
        </footer>
      </div>
    )
  }
}
