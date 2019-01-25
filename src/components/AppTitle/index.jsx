import React from 'react'
import { withRouter } from 'react-router-dom'
import title from '../../static/img/bt.png'
import './style.css'

class AppTitle extends React.Component {

  state = {}

  render () {
    return (
      <div className="ldq-title">
        <img src={title} alt=""/>
        <span>{this.props.children}</span>
      </div>
    )
  }
}

export default withRouter(AppTitle)
