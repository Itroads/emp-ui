import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './layout.less'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.array
  }
  render () {
    return (
      <div className={style.container}>
        <div className={style.header}>
          {this.props.children[0]}
        </div>
        <div className={style.content}>
          {this.props.children[1]}
        </div>
        <div className={style.footer}>
          {this.props.children[2]}
        </div>
      </div>
    )
  }
}

export default Layout