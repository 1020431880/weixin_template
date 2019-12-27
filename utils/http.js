import request from '../libs/request.js'
import env from '../env/config.js'

// 创建request实例
const service = request.create({
  baseURL: env.API_URL,
})

// 拦截器
service.interceptors.request.use(config => {
  config.header['token'] = 1234;
  config.header['my_sessionid'] = 1234;
  console.log('request-config：', config);
  return config;
})

service.interceptors.response.use(response => {
  console.log('response-success：', response);
  return response;
}, error => {
  console.log('response-error：', error);
  return Promise.reject(error);
})


export default service;