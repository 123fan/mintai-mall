import ajax from './ajax'

const DEV_URL = 'http://192.168.0.112:8083'

export default class API {

  // 登录
  static reqLogin (params) {
    return ajax(`${DEV_URL}/pcLogin/login`, params)
  }
}

