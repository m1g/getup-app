import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

export default class IteneraryList extends Component {

  _clickCreateList = () => {
    browserHistory.push('/itenerary/foo-bar')
  }

  render () {
    return (
      <div className='itenerary-background'>
        <header className='itenerary-header'>
          <h2>Itenerary</h2>
        </header>
        <div className='itenerary-selectors'>
          <button>List of Trips</button>
        </div>
        <section className='itenerary-section'>
          {/* <form onSubmit={this.handleSubmit}>
          <label>
            Name: Trip Name
            <input value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit' />
          <input type='number' name='No. of People' />
        </form> */}
          <p>Enter the name of your Trip. PRO TIP: Using the name of the location will help your friends make quicker decisions</p>
          <input type='text' placeholder='Trip Name' />
          <div className='itenerary-create'>
            <p><a href=''>Invite friends</a></p>
            <button type='submit' onClick={this._clickCreateList}>Create List</button>
          </div>
        </section>
        <footer className='itenerary-footer'>
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
