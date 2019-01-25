import React from 'react'
import {
  Form, Icon, Input, Button,
} from 'antd';
import AppHeader from '../../components/AppHeader'
import AppFooter from '../../components/AppFooter'
import './style.css'
import $ from 'jquery'



class Login extends React.Component {

  state = {
    activeIndex:0,
  }
  //切换tab
  selectTab(item,index){
    this.activeIndex = index;
    $('.tab_box span').removeClass('activeTab').eq(index).addClass('activeTab')
  }
  callback(key) {
    console.log(key);
  }
  render () {
    return (
      <div>
       <AppHeader />
        <div className='content_box'>
          <div className='login_box'>
             <div className='right_box'>
               <div className='title'>
                <span className='activeTitle'>登录</span>
                <span>注册</span>
               </div>
              <div className='tab_box'>
                <span className='activeTab'>密码登录</span>
                <span >验证码登录</span>
              </div>
              
             </div>
          </div>
        </div>
        <AppFooter />
      </div>
    )
  }
}

export default Login
