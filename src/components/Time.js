import React, { Component } from 'react'
import moment from 'moment'

class Time extends Component {

  static propTypes = {
    stamp: React.PropTypes.string.isRequired,
    label: React.PropTypes.string
  }

  relativeTime () {
    return moment(this.props.stamp).fromNow()
  }

  formattedTime () {
    return moment(this.props.stamp).format('MMMM Do, YYYY')
  }

  render () {
    return <time dateTime={this.props.stamp} title={this.formattedTime()}>
      {this.props.label}
      &nbsp;
      {this.formattedTime()}
    </time>
  }
}

export default Time
