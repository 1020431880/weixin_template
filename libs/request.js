/*
 * 功能：小程序仿axios的Request封装
 *
 * 创建日期：2019-12-23
 * 更新日期：2019-12-23
 * 作者：GaoShiWei
 */
export default class Request {
  // 配置项
  configure = {
    baseURL: '', // 请求url地址
    header: {
      'content-type': 'application/json;charset=utf-8'
    }, // header
    method: 'GET', // 请求的类型，支持get，post，put，delete等
    dataType: 'json', // 返回的数据格式，默认json
    responseType: 'text', // 响应的数据格式，默认text
    data: {}, // 传参
    timeout: 3 * 1000, // 请求超时时间
  }

  // 拦截器
  interceptors = {
    request: {
      use: (configCb) => {
        this.configure = Object.assign(this.configure, configCb && configCb(this.configure));
        if (configCb) this.interceptors.response.success = configCb;
      },
      success: (configCb => configCb)
    },
    response: {
      use: (successCb, errorCb, configCb) => {
        if (successCb) this.interceptors.response.success = successCb;
        if (errorCb) this.interceptors.response.error = errorCb;
        if (configCb) this.interceptors.response.config = configCb;
      },
      success: (successCb => successCb),
      error: (errorCb => errorCb),
      config: (configCb => configCb)
    }
  }

  // 构造器
  constructor(props) {
    this.configure = Object.assign(this.configure, props)
  }

  // 提供create方法注入参数
  static create(configure = {}) {
    return new this(configure)
  }

  // 支持的http请求类型
  get(url, data = {}, header = {
    'content-type': 'application/json;charset=utf-8'
  }) {
    return this.request('GET', url, data, header);
  }
  post(url, data = {}, header = {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
  }) {
    return this.request('POST', url, data, header);
  }
  put(url, data = {}, header = {}) {
    return this.request('PUT', url, data, header);
  }
  delete(url, data = {}, header = {}) {
    return this.request('DELETE', url, data, header);
  }
  head(url, data = {}, header = {}) {
    return this.request('HEAD', url, data, header);
  }
  options(url, data = {}, header = {}) {
    return this.request('OPTIONS', url, data, header);
  }
  trace(url, data = {}, header = {}) {
    return this.request('TRACE', url, data, header);
  }
  connect(url, data = {}, header = {}) {
    return this.request('CONNECT', url, data, header);
  }

  // request封装
  request(method = '', url = '', data = {}, header = {}) {
    // 参数配置
    data = Object.assign(this.configure.data, data);
    method = method || this.configure.method;
    url = this.configure.baseURL + url;
    header = Object.assign(this.configure.header, header);

    // request请求
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        header: header,
        dataType: this.configure.dataType || 'json',
        responseType: this.configure.responseType || 'text',
        method: method,
        success: res => {
          // 成功拦截器回调
          if (res && res.statusCode == 200) {
            this.interceptors.response.success.call(this, res);
            this.interceptors.response.config.call(this, this.configure)
            resolve(res);
          } else {
            // 错误拦截器回调
            this.interceptors.response.error.call(this, res);
            this.interceptors.response.config.call(this, this.configure)
            reject(res)
          }
        },
        fail: err => {
          // 错误拦截器回调
          this.interceptors.response.error.call(this, err);
          this.interceptors.response.config.call(this, this.configure)
          reject(err)
        }
      })
    })
  }
}