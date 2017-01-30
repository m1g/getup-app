import React, { Component } from 'react'

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
              <li><a href='explore.html' className='active'><i className='fa fa-compass fa-2x' aria-hidden='true' /></a></li>
              <li><a href='flights.html'><i className='fa fa-plane fa-2x' aria-hidden='true' /></a></li>
              <li><a href='hotels.html'><i className='fa fa-bed fa-2x' aria-hidden='true' /></a></li>
              <li><a href='trips.html'><i className='fa fa-suitcase fa-2x' aria-hidden='true' /></a></li>
              <li><a href='profile.html'><i className='fa fa-user fa-2x' aria-hidden='true' /></a></li>
            </ul>
          </nav>
        </footer>
      </div>
    )
  }
}
