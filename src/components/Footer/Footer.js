import React, { Component } from 'react'
import style from './footer.less'

class Footer extends Component {
  render () {
    return (
      <footer className={style.footer + ' skin-footer'}>
        <span>Administrator( admin )</span>
        <span>Copyright © NetInfo 2016 - 2018 All right reserved.</span>
        <span>Ver. 2.1.0</span>
      </footer>
    )
  }
}

export default Footer
