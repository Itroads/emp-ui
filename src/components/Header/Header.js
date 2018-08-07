import React, { Component } from 'react'
import style from './header.less'
import logoImg from './logo.png'
import {skin, setSkinStyle} from '@util/skin'

class Header extends Component {

  handleChangeSkin (skintype) {
    setSkinStyle(skin[skintype])
  }

  render () {
    return (
      <header className={style.header + ' ' + 'skin-header'}>
        <div className={style.logo}>
          <img src={logoImg} alt="eMP logo"/>
          <span>Enterprise Management Portal</span>
        </div>
        <div className={style.operation}>
          <div onClick={this.handleChangeSkin.bind(this, 'iceBlue')}>iceBlue</div>
          <div onClick={this.handleChangeSkin.bind(this, 'lightBlue')}>lightBlue</div>
        </div>
      </header>
    )
  }
}

export default Header