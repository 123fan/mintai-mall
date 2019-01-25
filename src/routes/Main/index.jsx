import React from 'react'
import { Carousel } from 'antd'
import './style.css'

class Main extends React.Component {

  state = {}

  render () {
    return (
      <div>
        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <div className="wrap">
          hhhhh
        </div>
      </div>
    )
  }
}

export default Main
