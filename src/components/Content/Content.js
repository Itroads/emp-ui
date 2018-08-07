import React, { Component } from 'react'
import style from './content.less'

class Content extends Component {
  render () {
    return (
      <div className={style.container}>
        <div className={style.menu}>
        menu
        </div>
        <div className={style.content}>
        content
        </div>
        <div className={style.operateMenu}>
        operateMenu
        </div>
      </div>
    )
  }
}

export default Content
