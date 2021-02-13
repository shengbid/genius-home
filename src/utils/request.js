import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from '@/utils/utils'
import router from '@/router'

const service = axios.create({
  timeout: 5000,
  baseURL: '/api'
})

if (getToken()) {
  service.defaults.headers.common['token'] = getToken()
  // service.defaults.headers.common['Authorization'] = "Bearer " + getToken()
}

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Message({
      type: 'error',
      message: error.message
    })
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 200) {
      return res
    } else {
      if (res.code === 103) { // 登陆超时
        router.push({name: 'Login'})
      }
      Message({
        type: 'error',
        message: res.msg
      })
      return Promise.reject(new Error(res.msg || 'error'))
    }
  },
  error => {
    Message({
      type: 'error',
      message: error.message
    })
    return Promise.reject(error)
  }
)

export default service