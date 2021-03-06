import React, { Component } from 'react'
import { Link } from 'react-router'
import SessionButton from './SessionButton'
import withAuth from '../utils/withAuth'

@withAuth
export default class Profile extends Component {

  // profilePic () {
  //   if (this.props.auth.profile.picture_large === undefined) {
  //     return this.props.auth.profile.picture
  //   } else {
  //     return this.props.auth.profile.picture_large
  //   }
  // }

  render () {
    return (
      <div className='profile-background'>
        <header className='profile-header'>
          <h2>Profile</h2>
        </header>
        <section>
          <img src={this.props.auth.profile.picture_large} height={150} width={150} alt='' />
          <ul>
            <li><h3>{this.props.auth.profile.name}</h3></li>
            <li>{this.props.auth.profile.email}</li>
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
              <li><Link activeClassName='is-active' to='/profile' onlyActiveOnIndex><i className='fa fa-user fa-2x' aria-hidden='true' /></Link></li>
            </ul>
          </nav>
        </footer>
      </div>
    )
  }
}
