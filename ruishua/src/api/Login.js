/*
 * @Author: 陶务华
 * @Date: 2020-04-16 22:48:54
 * @LastEditTime: 2020-04-17 00:27:58
 * @LastEditors: Please set LastEditors
 * @Description: 业务相关接口在这里进行封装然后注册到index.js里面
 * 后面引入main.js放在vue的原型供全局使用，这是登录模块
 * @FilePath: \ruishua\src\http\interface.js
 */
import axios from '@/api/http'
import base from './Base'
/**
 * params 传递的参数
 */
const loginModule = {
  refreshAuthImage (params) {
    return axios.get(`${base.develop}/api/v1/bpi/currentprice.json`, {
      params: params
    })
  },
  register (params) {
    return axios.post(`${base.develop}`, {
      params: params
    })
  },
  login (params) {
    return axios.post(`${base.develop}/api/user/user_login`, params)
  }

}
export default loginModule
