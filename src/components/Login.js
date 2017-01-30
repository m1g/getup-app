import React, { Component } from 'react'

export default class Login extends Component {

  render () {
    return (
      <div>
        <video autoPlay loop muted poster='' className='video-bg'>
          <source src='media/swim-vid.mp4' type='video/mp4' />
        </video>
        <main>
          <header className='login-header'>
            <img src='images/logo.png' alt='main logo' />
          </header>
          <section className='login-section'>
            <p><a href='signup.html'>Don't have an account? Sign up</a></p>
            <form action='submit'>
              <input type='email' placeholder='Email Address' />
              <input type='password' placeholder='********' />
              <button type='submit' name='sign-in'><a href='explore.html'>Sign In</a></button>
            </form>
          </section>
          <footer className='login-footer'>
            <p><a href='forgotpass.html'>Forgot your password?</a></p>
            <div className='login-social'>
              <button type='submit' name='twitter' className='twitter'><i className='fa fa-twitter fa-2x' aria-hidden='true' /><a href='explore.html'>Log in</a></button>
              <button type='submit' name='facebook' className='facebook'><i className='fa fa-facebook fa-2x' aria-hidden='true' /><a href='explore.html'>Log in</a></button>
            </div>
          </footer>
        </main>
      </div>
    )
  }
}
