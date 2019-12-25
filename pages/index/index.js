//获取应用实例
const app = getApp()
// 引入http
import http from '../../utils/http.js'
import util from '../../utils/util.js'
import {
  hexMD5
} from '../../libs/md5.js'

Page({
  data: {},

  /**
   * 生命周期
   */
  onLoad(options) {
    this.queryList();
  },
  onShow() {},

  /**
   * 查询
   */
  queryList() {
    http.get('/user/getUser').then(res => {
      console.log('返回成功：', res);
    }).catch(error => {
      console.log('返回失败：', error);
    })
  }
})