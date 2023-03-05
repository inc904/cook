import request from '@/utils/request.js'
import { getToken } from '@/utils/auth.js'

export function getCodeImg() {
  return request({
    url: '/captchaImage',
    method: 'get',
    headers: {
      isToken: false,
    },
    timeout: 2000,
  })
}
export function login(username, password, code, uuid) {
  let data = { username, password, code, uuid }
  return request({
    url: '/login',
    method: 'post',
    data,
    headers: {
      isToken: false,
    },
  })
}
export function getUserInfo() {
  return request({
    url: '/getInfo',
    method: 'get',
    data:{
      token: getToken()
    }
  })
}
