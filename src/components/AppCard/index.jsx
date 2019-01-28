import React from 'react'
import { withRouter } from 'react-router-dom'
import goodImg from './goods.jpg'
import './style.css'


class AppCart extends React.Component {

  state = {}

  render () {
    return (
      <div className="ldq-card">
        <img src={goodImg} width="100%" alt=""/>
        <h3 style={{ padding: '10px 5px' }}>商品名称规格</h3>
        <p style={{ marginBottom: '10px', padding: '0 5px' }}>
          <span>$17.80</span>
          <span style={{ float: 'right' }}>345人购买</span>
        </p>
      </div>
    )
  }
}

export default withRouter(AppCart)
