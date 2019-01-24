import React from 'react'
import { withRouter } from 'react-router-dom'

class AppFooter extends React.Component {

  state = {}

  render () {
    return (
      <div>
        这是AppFooter组件
      </div>
    )
  }
}

export default withRouter(AppFooter)
