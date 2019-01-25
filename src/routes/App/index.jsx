import React from 'react'
import banner from '../../static/img/app-banner.png'

class App extends React.Component {

  state = {}

  render () {
    return (
      <div>
        <img src={banner} width="100%" alt=""/>
        这是App组件
      </div>
    )
  }
}

export default App
