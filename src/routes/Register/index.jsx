import React from 'react'
import {
  Form,  Input
} from 'antd';
import AppHeader from '../../components/AppHeader'
import AppFooter from '../../components/AppFooter'
import './style.css'


class Register extends React.Component {

  state = {
   
  }
  componentDidMount(){
  
  }
 
  handleSubmit(){
     console.log('sub')
  }
  goLogin(){
    console.log('res')
    this.props.history.push('./login')
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
                <span onClick={()=>this.goLogin()} >登录</span>
                <span className='activeTitle' >注册</span>
               </div>
              {/* 注册 */}
              <div className='register'>
                  <Form  className="login_form">
                      <Form.Item>
                        <Input  placeholder="账号" />
                      </Form.Item>
                      <Form.Item>
                        <Input  placeholder="验证码" />
                        <span className='getYzm'>获取验证码</span>
                      </Form.Item>
                      <Form.Item>
                        <Input  placeholder="设置密码" />
                      </Form.Item>
                      <Form.Item>
                        <div onClick={()=>this.handleSubmit()} className='btn'>注册</div>
                      </Form.Item>
                  </Form>
                  
              </div>
              </div>
         
          </div>
        </div>
        <AppFooter />
      </div>
    )
  }
}

export default Register
