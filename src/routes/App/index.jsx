import React from 'react'
import { Icon } from 'antd'
import './style.css'

class App extends React.Component {
  state = {}
  render () {
    return (
      <div className="app-box">
        <div className="wrap">
          <h1>民泰商城APP</h1>
          <h3>—— 中药线上采购交易平台</h3>
          <div className="ldq-flex" style={{
            marginTop: '100px',
            justifyContent: 'space-around'
          }}>
            <div className="app-code"></div>
            <div className="app-code"></div>
          </div>
          <div className="ldq-flex" style={{
            marginTop: '20px',
            justifyContent: 'space-around'
          }}>
            <div className="app-button">
              <Icon type="apple" theme="filled" className="btn-icon" />
              <span>iPhone  下载</span>
            </div>
            <div className="app-button">
              <Icon type="android" theme="filled" className="btn-icon" />
              <span>Andriod  下载</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
