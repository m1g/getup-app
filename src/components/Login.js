import React, { Component } from 'react'
import SessionButton from './SessionButton'

import videoUrl from '../media/video-loop.gif'
import logoUrl from '../images/logo.png'

export default class Login extends Component {

  render () {
    return (
      <div>
        <img src={videoUrl} className='video-bg' alt='' />
        {/* <video autoPlay loop muted poster='' className='video-bg'>
          <source src={videoUrl} type='video/mp4' />
        </video> */}
        <main>
          <header className='login-header'>
            <img src={logoUrl} alt='main logo' />
          </header>
          <section className='login-section'>
            <SessionButton />
          </section>
        </main>
      </div>
    )
  }
}
