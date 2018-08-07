import React, { Component } from 'react'
import style from './header.less'
import logoImg from '@static/logo.png'
import {skin, setSkinStyle} from '@util/skin'

class Header extends Component {

  handleChangeSkin (skin) {
    setSkinStyle(skin)
  }

  render () {
    return (
      <header className='header skin-app'>
        <div className={style.logo}>
          <img src={logoImg} alt="eMP logo"/>
          <span>Enterprise Management Portal</span>
        </div>
        <div className={style.operation}>
          <div onClick={this.handleChangeSkin.bind(this, 'iceBlue')}></div>
          <div onClick={this.handleChangeSkin.bind(this, 'lightBlue')}></div>
        </div>
      </header>
    )
  }
}

export default Header