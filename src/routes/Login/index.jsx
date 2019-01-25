import React from 'react'
import {
  Form,  Input, Checkbox
} from 'antd';
import AppHeader from '../../components/AppHeader'
import AppFooter from '../../components/AppFooter'
import './style.css'
import $ from 'jquery'



class Login extends React.Component {

  state = {
    activeIndex:0,
  }
  componentDidMount(){
    // $('.right_box .tab').removeClass('selectTab').eq(this.state.activeIndex).addClass('selectTab')
  }
  //切换tab
  selectTab(index){
    console.log(index)
    this.activeIndex = index;
    $('.tab_box span').removeClass('activeTab').eq(index).addClass('activeTab')
    $('.right_box .tab').removeClass('selectTab').eq(index).addClass('selectTab')
  }
  handleSubmit(){
     console.log('sub')
  }
  goRegister(){
    console.log('res')
    console.log(this.props)
    this.props.history.push('/register')
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
                <span onClick={()=>this.goRegister()}>注册</span>
               </div>
              <div className='tab_box'>
                <span className='activeTab' onClick={()=>this.selectTab(0)}>密码登录</span>
                <span  onClick={()=>this.selectTab(1)}>验证码登录</span>
              </div>
              {/* 密码登录 */}
              <div className='tab selectTab'>
                  <Form  className="login_form login_form1">
                      <Form.Item>
                        <Input  placeholder="账号" />
                      </Form.Item>
                      <Form.Item>
                        <Input  placeholder="密码" />
                      </Form.Item>
                      <Form.Item>
                         <Checkbox>记住密码</Checkbox>
                      </Form.Item>
                      <Form.Item>
                        <div onClick={()=>this.handleSubmit()} className='btn'>登录</div>
                      </Form.Item>
                  </Form>
                  <div className='resBtn' onClick={()=>this.goRegister()}>我要注册</div>
              </div>
              {/* 验证码登录 */}
              <div className='tab'>
                  <Form  className="login_form">
                      <Form.Item>
                        <Input  placeholder="账号" />
                      </Form.Item>
                      <Form.Item>
                        <Input  placeholder="验证码" />
                        <span className='getYzm'>获取验证码</span>
                      </Form.Item>
                      <Form.Item>
                        <div onClick={()=>this.handleSubmit()} className='btn'>登录</div>
                      </Form.Item>
                  </Form>
                  <div className='resBtn' onClick={()=>this.goRegister()}>我要注册</div>
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
