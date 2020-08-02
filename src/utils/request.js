import axios        from 'axios'
import { Message }  from "element-ui";
import APP_BASE_URL from './getEnv.js'

const service = axios.create({
  baseURL: APP_BASE_URL,
  timeout: '5000'
})

// request拦截器
service.interceptors.request.use(config => {
  if ('store.getters.token') { // 如果token存在
    config.headers['aToken'] = 1 // 获取token
  }
  return config;
}, error => {
  console.error(error);
  Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
  response => response,
  error => {
    Message({
      message: '请求出错',
      type: 'error',
      duration: 5000
    })
  }
)

export default service;
