import React from 'react'
import { withRouter } from 'react-router-dom'
import AppNav from '../AppNav'

class AppHeader extends React.Component {

  state = {}

  render () {
    return (
      <div>
        这是AppHeader组件
        <AppNav />
      </div>
    )
  }
}

export default withRouter(AppHeader)
