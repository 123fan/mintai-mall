import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import './style.css'

class AppNav extends React.Component {

  state = {
    current: 'mail'
  }

  render () {
    return (
      <div className="wrap">
        <Menu
          defaultSelectedKeys={[window.location.hash.slice(1)]}
          mode="horizontal" theme="dark"
        >
          <Menu.Item key="/home/main">
            <NavLink to="/home/main">网站首页</NavLink>
          </Menu.Item>
          <Menu.Item key="/home/about">
            <NavLink to="/home/about">关于我们</NavLink>
          </Menu.Item>
          <Menu.Item key="/home/download">
            <NavLink to="/home/download">资料下载</NavLink>
          </Menu.Item>
          <Menu.Item key="/home/mall">
            <NavLink to="/home/mall">商城</NavLink>
          </Menu.Item>
          <Menu.Item key="/home/app">
            <NavLink to="/home/app">app下载</NavLink>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default withRouter(AppNav)
