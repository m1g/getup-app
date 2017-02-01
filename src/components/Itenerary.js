import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Itenerary extends Component {

  render () {
    return (
      <div>
        <header className='itenerary-header'>
          <h2>Itenerary</h2>
        </header>
        <div className='itenerary-selectors'>
          <button>My Trips</button>
          <button>Shared Trips</button>
        </div>
        <section className='itenerary-section' />
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Name: Trip Name
            <input value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit' />
          <input type='number' name='No. of People' />
        </form>
        <button type='submit'>Create List</button> */}
        <footer className='itenerary-footer'>
          <nav>
            <ul>
              <li><Link to='/explore'><i className='fa fa-compass fa-2x' aria-hidden='true' />Explore</Link></li>
              <li><Link to='/itenerary'><i className='fa fa-suitcase fa-2x' aria-hidden='true' />Itenerary</Link></li>
              <li><Link to='/profile'><i className='fa fa-user fa-2x' aria-hidden='true' />Profile</Link></li>
            </ul>
          </nav>
        </footer>
      </div>
    )
  }
}
