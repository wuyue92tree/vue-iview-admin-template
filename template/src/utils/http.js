import axios from 'axios'
import qs from 'qs'
import { Message } from 'iview'
import Db from './db.js'
import router from '../router'

let fetch = axios.create({})

fetch.defaults.baseURL = Db.get('backend_url') + '/api'
fetch.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
fetch.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (Db.get('access_token')) {
    config.headers.Authorization = 'JWT ' + Db.get('access_token')
  }
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  Message.error('客户端请求异常：' + error.message)
  return Promise.reject(error)
})

// 添加响应拦截器
fetch.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  try {
    if (error.response === undefined) {
      Message.error('无法连接到服务器，请联系管理员')
      router.push({name: 'login'})
    } else {
      if (error.response.status === 400) {
        Message.error('用户名或密码错误')
      } else if (error.response.status === 401) {
        router.push({name: 'login'})
      } else {
        Message.error(error)
      }
    }
  } catch (error) {
    Message.error('服务器响应异常：' + error.message)
  }
  return Promise.reject(error)
})

export default fetch
