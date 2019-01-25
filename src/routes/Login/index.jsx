import React from 'react'
import banner from '../../static/img/login-banner.png'

class Login extends React.Component {

  state = {}

  render () {
    return (
      <div>
        <img src={banner} width="100%" alt=""/>
        这是Login组件
      </div>
    )
  }
}

export default Login
