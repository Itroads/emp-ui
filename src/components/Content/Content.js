import React, { Component } from 'react'
import style from './content.less'

class Content extends Component {
  render () {
    return (
      <div className={style.container}>
        <div className={style.leftMenu + ' skin-left-menu'}>
        menu
        </div>
        <div className={style.content + ' skin-content'}>
        content
        </div>
        <div className={style.rightMenu + ' skin-right-menu'}>
        operateMenu
        </div>
      </div>
    )
  }
}

export default Content
