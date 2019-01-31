import React from 'react'
import { withRouter } from 'react-router-dom'
import AppCard from '../AppCard'
import PropTypes from 'prop-types';
import {Badge} from 'antd'
import './style.css'
class AppOrderNav extends React.Component {
  state = {
    a: [1,2,3,4]
  }
static propTypes={
   currentPosition:PropTypes.number.isRequired,
   goodsNum:PropTypes.number
};
    changeEle=()=>{
        const {currentPosition,goodsNum}=this.props;
        switch (currentPosition){
            case 0:return <p className="headText" >
                当前位置: 商城 > 购物车
            </p>;
            case 1:return <p className="headText" >
                当前位置: 商城 > 购物车 > 确定订单
            </p>;
            case 2:return <p className="headText" >
                当前位置: 商城 > 购物车 > 订单成功
            </p>;
        }
    };

  render () {
    const {currentPosition,goodsNum}=this.props;
    const loop=[
        '我的购物车','填写核对订单信息','成功提交订单'
    ];
      return (
      <div className="wrap">
          {
            this.changeEle()
          }
          <div className="align_between">
              <p>
                  {currentPosition>0?'订单':'购物车'}( <span style={{color:'#EB5153'}}>{goodsNum}</span> )
              </p>
              <div className="align_between" style={{marginLeft:500}}>
                  {
                      loop.map((item,index)=>{
                        return  <div className={index<=currentPosition?'isSelect':''}>
                            <Badge count={index+1} style={{ backgroundColor: '#CCCCCC', color: 'white', boxShadow: '0 0 0 1px #d9d9d9 inset',marginRight:4 }} />
                            <span className="text">{item}</span>
                                {
                                 index<2 ? (<span className="hengs"></span>):''
                                }

                        </div>
                      })
                  }

              </div>
          </div>
      </div>
    )
  }
}

export default withRouter(AppOrderNav)
