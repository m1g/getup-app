import React, { Component } from 'react'

export default class NewItenerary extends Component {

  render () {
    return (
      <div>
        <header className='trips-header'>
          <h2>Trips</h2>
        </header>
        <section className='trips-section'>
          <div className='trips-skip'>
            <button className='my-trip'><a href='#'>My Trips</a></button>
            <button><a href='#'>Shared Trips</a></button>
          </div>
          <h2>to MIAMI from NEW YORK</h2>
          <p>Enter up to 3 possible dates:</p>
          <div className='trips-dates'>
            <div>
              <i className='fa fa-calendar' aria-hidden='true' />
            </div>
            <div>
              <input type='text' placeholder='Departing' />
              <input type='text' placeholder='Returning' />
            </div>
          </div>
          <ul>
            <li>March 17, 2017 to March 20, 2017 X</li>
            <li>April 17, 2017 to April 21, 2017 X</li>
            <li>June 9, 2017 to June 12, 2017 X</li>
          </ul>
          <div className='flight-title'>
            <h3>Best Available Flights</h3>
          </div>
          <table className='trips-trips' cellSpacing='0'>
            <tbody>
              <tr>
                <td className='spacing'>Jet B</td>
                <td className='spacing'>Fri - Mon</td>
                <td rowSpan='2' className='spacing price'>$280</td>
              </tr>
              <tr>
                <td><i className='fa fa-plane fa-2x' aria-hidden='true' /></td>
                <td><h3>Mar 17 - Mar 20</h3></td>
              </tr>
            </tbody>
          </table>
          <table className='trips-trips' cellSpacing='0'>
            <tbody>
              <tr>
                <td className='spacing'>Delta</td>
                <td className='spacing'>Mon - Fri</td>
                <td rowSpan='2' className='spacing price'>$160</td>
              </tr>
              <tr>
                <td><i className='fa fa-plane fa-2x' aria-hidden='true' /></td>
                <td><h3>Apr 17 - Apr 21</h3></td>
              </tr>
            </tbody>
          </table>
          <table className='trips-trips' cellSpacing='0'>
            <tbody>
              <tr>
                <td className='spacing'>Spirit</td>
                <td className='spacing'>Fri - Mon</td>
                <td rowSpan='2' className='spacing price'>$300</td>
              </tr>
              <tr>
                <td><i className='fa fa-plane fa-2x' aria-hidden='true' /></td>
                <td><h3>Jun 9 - Jun 12</h3></td>
              </tr>
            </tbody>
          </table>
          <div className='flight-title'>
            <h3>Best Available Hotels</h3>
          </div>
          <table className='trips-trips' cellSpacing='0'>
            <tbody>
              <tr>
                <td className='spacing'>Hilt. Grand</td>
                <td className='spacing'>Fri - Mon</td>
                <td rowSpan='2' className='spacing price'>$310</td>
              </tr>
              <tr>
                <td><i className='fa fa-plane fa-2x' aria-hidden='true' /></td>
                <td><h3>Mar 17 - Mar 20</h3></td>
              </tr>
            </tbody>
          </table>
          <table className='trips-trips' cellSpacing='0'>
            <tbody>
              <tr>
                <td className='spacing'>Hampt. Inn</td>
                <td className='spacing'>Mon - Fri</td>
                <td rowSpan='2' className='spacing price'>$130</td>
              </tr>
              <tr>
                <td><i className='fa fa-plane fa-2x' aria-hidden='true' /></td>
                <td><h3>Apr 17 - Apr 21</h3></td>
              </tr>
            </tbody>
          </table>
          <table className='trips-trips' cellSpacing='0'>
            <tbody>
              <tr>
                <td className='spacing'>Beach Hse</td>
                <td className='spacing'>Fri - Mon</td>
                <td rowSpan='2' className='spacing price'>$250</td>
              </tr>
              <tr>
                <td><i className='fa fa-plane fa-2x' aria-hidden='true' /></td>
                <td><h3>Jun 9 - Jun 12</h3></td>
              </tr>
            </tbody>
          </table>
          <section className='trips-submit'>
            <div>
              <input type='text' placeholder='People traveling' />
              <input type='text' placeholder='Number of rooms' />
            </div>
            <div>
              <input type='text' placeholder='Traveling from' />
              <button type='submit'><a href='tripsadded.html'>Create Trip</a></button>
              <p><a href='index.html'>Cancel trip</a></p>
            </div>
          </section>
          <footer className='trips-footer'>
            <nav>
              <ul>
                <li><a href='explore.html'><i className='fa fa-compass fa-2x' aria-hidden='true' /></a></li>
                <li><a href='flights.html'><i className='fa fa-plane fa-2x' aria-hidden='true' /></a></li>
                <li><a href='hotels.html'><i className='fa fa-bed fa-2x' aria-hidden='true' /></a></li>
                <li><a href='trips.html'><i className='fa fa-suitcase fa-2x' aria-hidden='true' /></a></li>
                <li><a href='profile.html'><i className='fa fa-user fa-2x' aria-hidden='true' /></a></li>
              </ul>
            </nav>
          </footer>
        </section>
      </div>
    )
  }
}
