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

import service from "./index"

export function login(data: loginData) {
  return service({
    url: "/login",
    method: "post",
    data,
  })
}
