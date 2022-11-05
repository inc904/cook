import axios from "axios"
const baseURL =
  "https://www.fastmock.site/mock/c869ff2483247c08ac3b7995a9e92cde/api"
// "https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api"

const service = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
})

service.interceptors.request.use((config) => {
  const localToken = localStorage.getItem("token") || ""
  config.headers = config.headers || {}
  if (localToken) {
    config.headers.token = localToken
  }
  return config
})

service.interceptors.response.use(
  (data) => {
    const code: number = data.data.code
    if (code != 1) {
      return Promise.reject(data)
    }
    return data.data
  },
  (err) => {
    console.log(err)
  }
)

export default service
