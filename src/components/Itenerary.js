import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

export default class Itenerary extends Component {

  _clickAddItem = () => {
    browserHistory.push(window.location + '/newItem')
  }

  render () {
    return (
      <div className='itenerary-background'>
        <header className='itenerary-header'>
          <h2>{this.props.name}</h2>
        </header>
        <section className='itenerary-section'>
          <div className='itenerary-create'>
            <button type='submit' onClick={this._clickAddItem}>Add Line Item</button>
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
        {this.props.children}
      </div>
    )
  }
}
