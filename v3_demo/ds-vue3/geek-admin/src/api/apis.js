import request from './request'

export const login1 = (body) => {
  request.get('/mapi/getUsers').then((res) => {
    console.log(res)
    return res
  })
}
export const login2 = (body) =>
  request.post('/api/login', body).then((res) => {
    return res
  })

// export const login = (body) => {
//   let ret = ''
//   request.post('/api/login', body).then((res) => {
//     ret = res
//     return res
//   })
//   return ret
// }

// export const login = function (body) {
//   request.post('/api/login', body).then((res) => {
//     return res
//   })
// }

export const login3 = function (body) {
  request.post('/api/login', body).then((res) => {
    return res
  })
}

export const login = async (body) => {
  const res = await request.post('/api/login', body)
  return res
}

export const login5 =  (body) => {
  return request.post('/api/login', body).then((res) => {
    return res
  })
}
