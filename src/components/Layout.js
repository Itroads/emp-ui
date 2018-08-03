import React, { Component } from 'react'

class Layout extends Component {
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