import React from 'react'
import banner from '../../static/img/about-banner.png'

class About extends React.Component {

  state = {}

  render () {
    return (
      <div>
        <img src={banner} width="100%" alt=""/>
        这是About组件
      </div>
    )
  }
}

export default About
