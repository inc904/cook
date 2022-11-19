import axios from 'axios'
import { useMsgbox, Message } from 'element3'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 500,
})

service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code != 20000) {
      console.log('接口信息报错', res.message)
      return Promise.reject(new Erroe('res.message' | 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    console.log('接口信息报错', error)
    return Promise.reject(error)
  }
)

export default service
