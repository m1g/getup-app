import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ui from '../ui'

@observer
class Modal extends Component {

  _dismiss = () => { ui.dismissModal() }

  render () {
    if (ui.modal) {
      return <div className='modal'>
        <div className='inner'>
          <header>
            <button className='close-button' onClick={this._dismiss}>
              <i className='fa fa-times' aria-hidden='true' />
            </button>
          </header>
          <div className='content'>
            {ui.modal}
          </div>
        </div>
      </div>
    } else {
      return null
    }
  }
}

export default Modal
