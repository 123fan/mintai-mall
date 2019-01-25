import React from 'react'
import { withRouter } from 'react-router-dom'
import AppNav from '../AppNav'

import header from '../../static/img/header.png'
import logo from '../../static/img/logo.png'
import './style.css'

class AppHeader extends React.Component {

  state = {}

  render () {
    return (
      <div className="ldq-header" style={{ backgroundColor: '#6b441a' }}>
        <img src={header} width="100%" alt=""/>
        <img src={logo} className="ldq-logo" alt=""/>
        <AppNav />
      </div>
    )
  }
}

export default withRouter(AppHeader)
