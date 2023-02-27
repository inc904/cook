import axios from 'axios'
import { Notification } from 'element-ui'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})
service.interceptors.response.use((res) => {
  let code = res.data.code
  let msg = res.data.msg
  if (code !== 200) {
    Notification.error({ title: msg })
    return Promise.reject()
  } else {
    return res.data
  }
})
export default service
