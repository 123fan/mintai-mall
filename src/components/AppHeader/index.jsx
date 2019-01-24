import React from 'react'
import { withRouter } from 'react-router-dom'

class AppHeader extends React.Component {

  state = {}

  render () {
    return (
      <div>
        这是AppHeader组件
      </div>
    )
  }
}

export default withRouter(AppHeader)
