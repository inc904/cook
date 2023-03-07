import axios from 'axios'
import { getToken } from './auth'

import { Notification } from 'element-ui'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})
service.interceptors.request.use((config) => {
  const notToken = (config.headers || {}).notToken === true
  if (getToken() && !notToken) {
    config.headers.Authorization = 'Bearer ' + getToken()
  }
  return config
})

service.interceptors.response.use(
  (res) => {
    let code = res.data.code
    let msg = res.data.msg
    if (code === 401) {
      let errorMsg = '无效的会话，或者会话已过期，请重新登录。'
      // Notification.error({ title: errorMsg })
      return Promise.reject(new Error(errorMsg))
    } else if (code == 500) {
      Notification.error({ title: msg })
      // return Promise.reject(msg)
      // Error 对象有两个属性 message 和 stack
      return Promise.reject(new Error(msg))
    } else if (code != 200) {
      Notification.error({ title: msg })
      return Promise.reject(new Error(msg))
    } else {
      return res.data
    }
  },
  (error) => {
    let { message } = error
    if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常'
    }
    Notification({
      title: message,
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  }
)
export default service
