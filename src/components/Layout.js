import React, { Component } from 'react'
import Modal from './Modal'

export default class Layout extends Component {

  render () {
    return (
      <div>
        {this.props.children}
        <Modal />
      </div>
    )
  }
}
