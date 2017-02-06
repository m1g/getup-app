import React, { Component } from 'react'
import { Link } from 'react-router'
import SessionButton from './SessionButton'

export default class Profile extends Component {

  render () {
    return (
      <div className='profile-background'>
        <header className='profile-header'>
          <h2>Profile</h2>
        </header>
        <section>
          <img src='https://avatars.githubusercontent.com/u/8049663?v=3' alt='' />
          <ul>
            <li><h3>avatar name</h3></li>
            <li>email: @personemail.com</li>
          </ul>
        </section>
        <div className='profile-btn'>
          <SessionButton />
        </div>
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
