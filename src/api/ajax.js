// ajax请求函数模块
// 返回值是promise对象

import axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {

    let promise

    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        // Object.keys(data) 类似for in 都是取出data的可枚举属性的属性名 组成数组
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        // dataStr.lastIndexOf('&')  某个字符串子此字符串中最后出现的位置下标
        // substring(start,end)截取字符串 包头不包尾
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url) //axios.get(url)返回的是response 还要拿到response.data 所以可以用.then方法 进行处理
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}
