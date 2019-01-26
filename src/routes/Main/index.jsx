import React from 'react'
import { Carousel, Button } from 'antd'
import AppTitle from '../../components/AppTitle'
import AppCardList from '../../components/AppCardList'
import select from '../../static/img/select.png'
import banner1 from '../../static/img/main-banner.png'
import './style.css'

class Main extends React.Component {

  state = {}

  render () {
    return (
      <div>
        <Carousel autoplay>
          <div>
            <img src={banner1} width="100%" alt=""/>
          </div>
          <div>
            <img src={banner1} width="100%" alt=""/>            
          </div>
          <div>
            <img src={banner1} width="100%" alt=""/>            
          </div>
        </Carousel>
        <img src={select} style={{ width: '100%', marginTop: '-5px' }} alt=""/>
        <div className="wrap">
          <AppTitle>产品展示</AppTitle>
          <div>
            <AppCardList />
          </div>
          <div style={{ textAlign: 'center', margin: '30px' }}>
            <Button className="ldq-btn">查看更多</Button>
          </div>
        </div>
        <div className="wrap">
          <AppTitle>产品展示</AppTitle>
          <div>
            <AppCardList />
          </div>
          <div style={{ textAlign: 'center', margin: '30px' }}>
            <Button className="ldq-btn">查看更多</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
