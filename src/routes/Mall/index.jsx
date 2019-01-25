import React from 'react'
import { Button } from 'antd'
import banner from '../../static/img/mall-banner.png'
import AppTitle from '../../components/AppTitle'
import AppCardList from '../../components/AppCardList'


class Mall extends React.Component {

  state = {
    goods: ['男性专区', '女性专区', '儿童必备', '中药饮品', '当季热销']
  }

  render () {
    return (
      <div>
        <img src={banner} width="100%" alt=""/>
        {
          this.state.goods.map(item => {
            return (
              <div className="wrap">
                <AppTitle>{item}</AppTitle>
                <AppCardList></AppCardList>
                <div style={{ textAlign: 'center', margin: '30px' }}>
                  <Button className="ldq-btn">查看更多</Button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Mall
