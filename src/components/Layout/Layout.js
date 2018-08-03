import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.array
  }
  render () {
    return (
      <div className='container'>
        <div className='header'>
          {this.props.children[0]}
        </div>
        <div className='content'>
          {this.props.children[1]}
        </div>
        <div className="footer">
          {this.props.children[2]}
        </div>
      </div>
    )
  }
}

export default Layout