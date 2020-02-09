import ajax from './ajax'

// const baseUrl = 'http://localhost:5000'
// const baseUrl = 'http://d25t660475.zicp.vip:54398'
const baseUrl = ''

// 请求登录
export default function login(username, password) {
  // return ajax({
  return ajax.get(baseUrl + '/login?username='+username+'&password='+password)
  //   method: 'get',
  //   url: baseUrl + '/login?username='+username+'&password='+password,
  //   // data: {
  //   //   username,
  //   //   password
  //   // }
  // })
}