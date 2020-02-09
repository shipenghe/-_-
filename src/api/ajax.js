import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // const { method, data } = config
  // // 处理post请求，将data转化为查询字符串格式
  // if (method.toLocaleLowerCase() === 'post' && typeof data === 'object') {
  //   config.data = qs.stringify(data)
  // }
  return config
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data
}, function (err) {
  // 统一处理所有请求异常
  message.err('请求出错' + err.message)
  // 返回一个pending状态的Promise，中断promise链
  return new Promise(() => {})
})

export default axios