import React, { Component } from 'react'
import SessionButton from './SessionButton'

import videoUrl from '../media/swim-vid.mp4'
import logoUrl from '../images/logo.png'

export default class Login extends Component {

  render () {
    return (
      <div>
        <video autoPlay loop muted poster='' className='video-bg'>
          <source src={videoUrl} type='video/mp4' />
        </video>
        <main>
          <header className='login-header'>
            <img src={logoUrl} alt='main logo' />
          </header>
          <section className='login-section'>
            <p><a href='signup.html'>Don't have an account? Sign up</a></p>
            <form action='submit'>
              <input type='email' placeholder='Email Address' />
              <input type='password' placeholder='********' />
              <SessionButton />
            </form>
          </section>
        </main>
      </div>
    )
  }
}
