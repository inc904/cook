/*
 登录接口：
 path: '/login'
 methods: 'post'
 params: username & passsword

 商品列表：
 /getGoodslist
 get

 角色列表
 /getRoleList
 get

 权限列表
 /getAuthorityList
 get

*/

interface loginData {
  username: string
  password: string
  // checkPass: String
}

import service from './index'

export function login(data: loginData) {
  return service({
    url: '/login',
    method: 'post',
    data,
  })
}
export function getGoodsList() {
  return service({
    url: '/getGoodsList',
    method: 'get',
  })
}

export function getUserList() {
  return service({
    url: '/getUserList',
    method: 'get',
  })
}

export function getRoleList() {
  return service({
    url: '/getRoleList',
    method: 'get',
  })
}
