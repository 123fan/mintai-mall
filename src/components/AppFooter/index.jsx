import React from 'react'
import { withRouter } from 'react-router-dom'
import AppTitle from '../AppTitle'
import icon1 from '../../static/img/foot-icon1.png'
import icon2 from '../../static/img/foot-icon2.png'
import icon3 from '../../static/img/foot-icon3.png'
import logo from '../../static/img/logo1.png'

import './style.css'

class AppFooter extends React.Component {

  state = {}

  render () {
    return (
      <div>
        <div className="foot-line"></div>
        <AppTitle>联系我们</AppTitle>
        <div className="ldq-flex wrap">
          <div className="foot-info">
            <h1>
              <img src={icon1} alt="" />
            </h1>
            <span>地址</span>
            <p>杭州市萧山区邵东路136-1号</p>
          </div>
          <div className="foot-info">
            <h1>
              <img src={icon2} alt=""/>
            </h1>
            <span>联系方式</span>
            <p>0571-57137680</p>
          </div>
          <div className="foot-info">
            <h1>
              <img src={icon3} alt="" />
            </h1>
            <span>app</span>
            <p>民泰网上商城app</p>
          </div>
        </div>
        <div className="foot-list">
          <img src={logo} className="top-img" alt=""/>
          <div className="wrap">
            <ul>
              <li>网站首页</li>
              <li>关于我们</li>
              <li>质检单</li>
            </ul>
            <ul>
              <li>手机app下载</li>
              <li>网上商城</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          @2019 浙江民泰医药有限公司版权所有
        </div>
      </div>
    )
  }
}

export default withRouter(AppFooter)
