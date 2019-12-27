/*
 * 功能：小程序工具类
 *
 * 创建日期：2019-12-16
 * 更新日期：2019-12-17
 * 作者：GaoShiWei
 */
export default {
  /**
   * 判断是否是数字
   * @param {*} value 参数
   * @returns 返回true和false
   */
  isNumber(value) {
    return (Object.prototype.toString.call(value).slice(8, -1) === 'Number');
  },
  /**
   * 判断是否是整数
   * @param {*} value 参数
   * @returns 返回true和false
   */
  isInteger(value) {
    return Number.isInteger(value);
  },
  /**
   * 判断是否是日期类型
   * @param {*} value 参数
   * @returns 返回true和false
   */
  isDate(value) {
    return (Object.prototype.toString.call(value).slice(8, -1) === 'Date');
  },
  /**
   * 判断是否是对象
   * @param {*} value 参数
   * @returns 返回true和false
   */
  isObject(value) {
    return (Object.prototype.toString.call(value).slice(8, -1) === 'Object');
  },
  /**
   * 判断是否是数组
   * @param {*} value 参数
   * @returns 返回true和false
   */
  isArray(value) {
    return (Object.prototype.toString.call(value).slice(8, -1) === 'Array');
  },
  /**
   * 判断是否是字符串
   * @param {*} value 参数
   * @returns 返回true和false
   */
  isString(value) {
    return (Object.prototype.toString.call(value).slice(8, -1) === 'String');
  },
  /**
   * 判断是否是布尔类型
   * @param {*} value 参数
   * @returns 返回true和false
   */
  isBoolean(value) {
    return (Object.prototype.toString.call(value).slice(8, -1) === 'Boolean');
  },
  /**
   * 格式化值为int
   * @param {*} value 参数
   * @returns 返回数字
   */
  parseInt(value) {
    return parseInt(value, 10);
  },

  /**
   * 判断两个值是否相等
   * 注：强制比较，包括同一个字符，但是不同类型
   * @param {*} value1 参数1
   * @param {*} value2 参数2
   * @returns 返回true和false
   */
  equals(value1, value2) {
    return Object.is(value1, value2);
  },
  /**
   * 判断值是否是空的
   * @param {*} value 参数
   * @returns 返回true和false
   */
  isEmpty(value) {
    return (value == null || value.length == 0);
  },
  /**
   * 判断数据是否为空，可以验证类型为object，stirng，number等
   * @param {*} value 验证的数据
   * @returns 返回true和false
   */
  isNull(value) {
    if (typeof value == 'object') {
      return (value == null || value === '' || (value != null && Object.keys(value).length == 0) || value.length == 0);
    } else if (typeof value == 'string') {
      return (value == null || value === '' || value == undefined);
    } else if (typeof value == 'number') {
      return (value == null || value === '' || value == undefined);
    } else {
      return (value == null || value === '');
    }
  },

  /**
   * 去除字符串两边空格
   * @param {String} value 参数
   * @returns 返回处理后的字符串
   */
  trim(value) {
    if (value == null || value == '') return;
    return value.replace(/(^\s*)|(\s*$)/g, '');
  },
  /**
   * 去除字符串左边空格
   * @param {String} value 参数
   * @returns 返回处理后的字符串
   */
  trimLeft(value) {
    if (value == null || value == '') return;
    return value.replace(/(^\s*)/g, '');
  },
  /**
   * 去除字符串右边空格
   * @param {String} value 参数
   * @returns 返回处理后的字符串
   */
  trimRight(value) {
    if (value == null || value == '') return;
    return value.replace(/(\s*$)/g, "");
  },
  /**
   * 去除字符串全部空格
   * @param {String} value 参数
   * @returns 返回处理后的字符串
   */
  trimAll(value) {
    if (this.isNull(value)) return;
    return value.replace(/\s+/g, '');
  },
  /**
   * 数字前补齐零
   * @param {String|Number} value 参数
   * @returns 返回处理后的字符串
   */
  digit(value) {
    value = value.toString();
    return value[1] ? value : '0' + value;
  },
  /**
   * 生成UUID
   * @returns 返回处理后的字符串
   */
  getUUID() {
    let s = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (s() + s() + "-" + s() + "-" + s() + "-" + s() + "-" + s() + s() + s());
  },
  /**
   * 生成指定位数的随机数
   * @param {Number} n 生成个数
   * @returns 返回指定位数的随机数
   */
  getRandom(n = 1) {
    return Math.floor(Math.random() * Math.pow(10, n));
  },
  /**
   * 数字补齐0到指定位数的字符串
   * @param {*} value 数字值
   * @param {*} length 需要的补齐0后的字符串长度
   * @returns 返回补0后的字符串，比如传参(10,4)，返回补齐0的4位字符串“0010”
   */
  prefixZero(value, length = 2) {
    return (Array(length).join('0') + value).slice(-length);
  },

  /**
   * map转object
   * @param {Map} map 参数
   * @returns 返回Object
   */
  mapToObject(map) {
    let obj = Object.create(null);
    for (let [k, v] of map) {
      obj[k] = v;
    }
    return obj;
  },
  /**
   * object转map
   * @param {Object} obj 参数
   * @returns 返回Map
   */
  objectToMap(obj) {
    let map = new Map();
    for (let k of Object.keys(obj)) {
      map.set(k, obj[k]);
    }
    return map;
  },
  /**
   * map转json
   * @param {Map} map 参数
   * @returns 返回Json
   */
  mapToJson(map) {
    return JSON.stringify(this.mapToObject(map));
  },
  /**
   * json转map
   * @param {String} json 参数
   * @returns 返回Map
   */
  jsonToMap(json) {
    return this.objectToMap(JSON.parse(json));
  },

  /**
   * 判断是否是闰年
   * @param {Number} year 年份
   * @returns 返回true和false
   */
  isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || (year % 400 === 0);
  },
  /**
   * 获得日期，默认为当前日期，格式为：yyyy-MM-dd
   * @param {Date} date 默认当前日期
   * @param {String} separator 年月日分隔符，默认“-”
   * @returns 返回yyyy-MM-dd
   */
  getDefaultDate(date = new Date(), separator = '-') {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return [year, month, day].map(this.digit).join(separator);
  },
  /**
   * 获得时间，默认为当前时间，格式为：yyyy-MM-dd HH:mm:ss
   * @param {Date} date 默认当前时间
   * @param {String} separator 年月日分隔符，默认“-” 
   * @returns 返回yyyy-MM-dd HH:mm:ss
   */
  getDefaultDateTime(date = new Date(), separator = '-') {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return [year, month, day].map(this.digit).join(separator) + ' ' + [hour, minute, second].map(this.digit).join(':');
  },
  /**
   * 获取当前的时间戳
   * @param {Date} date 获取的时间，默认当前时间
   * @returns 返回时间戳
   */
  getDefaultTimestamp(date = new Date()) {
    return date().getTime();
  },
  /**
   * 格式化时间戳为日期
   * @param {Number} timestamp 时间戳
   * @returns 返回日期对象
   */
  formatTimestampToDate(timestamp) {
    if (!timestamp) return null;
    return new Date(timestamp);
  },
  /**
   * 获取当前的Unix时间戳
   * @param {Date} date 获取的时间，默认当前时间
   * @returns 返回Unix时间戳
   */
  getDefaultUnixTimestamp(date = new Date()) {
    return Math.round(date.getTime() / 1000);
  },
  /**
   * 格式化Unix时间戳为日期
   * @param {Number} timestamp Unix时间戳
   * @returns 返回日期对象
   */
  formatUnixTimestampToDate(timestamp) {
    if (!timestamp) return null;
    return new Date(timestamp * 1000);
  },
  /**
   * 获得某天是周几
   * @param {Date} date 日期
   * @param {Number} type 0：返回周一，周二等；1：返回1，2等
   * @returns 返回对应的中文的周几或者数字的周几
   */
  getWeekDay(date = new Date(), type = 0) {
    if (this.isNull(date)) return;
    let day = null;
    if (type) {
      day = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六")[date.getDay()];
    } else {
      day = new Array("7", "1", "2", "3", "4", "5", "6")[date.getDay()];
    }
    return day;
  },
  /**
   * 获得某年的某月对应有多少天
   * @param {*} year 年
   * @param {*} month 月
   * @returns 返回该月有多少天
   */
  getMonthDayNum(year, month) {
    month = this.parseInt(month);
    return new Date(year, month, 0).getDate();
  },
  /**
   * 获得某年的某月所有天数
   * @param {Date} year 年
   * @param {Date} month 月
   * @returns 对应的天数数组
   */
  getMonthDayArray(year, month) {
    month = this.parseInt(month);
    return Array.from({
      length: new Date(year, month, 0).getDate()
    }, (item, index) => index + 1);
  },
  /**
   * 获得某年的某月最后一天
   * @param {Date} year 年
   * @param {Date} month 月
   * @returns 返回某年的某月最后一天是几号
   */
  getMonthDayLast(year, month) {
    month = this.parseInt(month) + 1;
    return new Date(year, month, 0).getDate();
  },
  /**
   * 将日期字符串转换为数组
   * 
   * @param {String} str 日期字符串 格式只支持 yyyy-MM-dd HH:mm:ss和yyyy/MM/dd HH:mm:ss
   * @returns 返回字符串数组
   */
  getDateArray(str) {
    str = str.replace(/(\-)|(\:)|(\s)|(\/)/g, ',');
    return str.split(",");
  },
  /**
   * 获得加减后天数后的日期
   * @param {Date} date 需要操作的日期
   * @param {Number} num 加减日期的数量，用-1和+1天表示
   * @returns 返回加减后的日期
   */
  getDiffDate(date, num) {
    return date.setDate(date.getDate() + num);
  },
  /**
   * 计算两个日期之间相差的天数，支持多种日期格式
   * @param {String} startDate 计算的开始日期
   * @param {String} endDate 计算的结束日期
   * @returns 返回两个日期相差的天数，返回负数代表超过多少天，返回正数代表还有多少天
   */
  getDiffDateNum(startStr, endStr) {
    if (startStr == null || startStr == null) return 0;
    let startDate = this.formatDate(startStr);
    let endDate = this.formatDate(endStr);
    return (endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000);
  },
  /**
   * 获得两个日期之间所有日期
   * 
   * @param {String} startStr 开始时间
   * @param {String} endStr 结束时间
   * @returns 返回两个日期之间日期字符串数组
   */
  getDiffDateArray(startStr, endStr) {
    let diffDateArray = [];
    let startDate = this.formatDate(startStr);
    let endDate = this.formatDate(endStr);
    while (endDate.getTime() - startDate.getTime() >= 0) {
      let year = startDate.getFullYear();
      let month = startDate.getMonth().toString().length == 1 ? "0" + (startDate.getMonth() + 1).toString() : (startDate.getMonth() + 1);
      let day = startDate.getDate().toString().length == 1 ? "0" + startDate.getDate() : startDate.getDate();
      diffDateArray.push(year + "-" + month + "-" + day);
      startDate.setDate(startDate.getDate() + 1);
    }
    return diffDateArray;
  },
  /**
   * 将日期对象转为指定日期格式的字符串
   * @param {Date} date 要转换的日期
   * @param {String} formatStr 需要格式化的字符串，如yyyy/MM/dd HH:mm:ss，默认是yyyy-MM-dd
   * @returns 返回指定格式的日期字符串
   */
  formatDateToStr(date, formatStr = "yyyy-MM-dd") {
    if (!date || new Date(date) == 'Invalid Date') {
      return null;
    }
    // 日期字符串格式化
    let o = {
      "M+": date.getMonth() + 1, // 月
      "d+": date.getDate(), // 日
      "h+": (date.getHours() % 12) == 0 ? 12 : (date.getHours() % 12), // 12小时制
      "H+": date.getHours(), // 24小时制
      "m+": date.getMinutes(), // 分钟
      "s+": date.getSeconds(), // 秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
      "S": date.getMilliseconds(), //毫秒 
    };
    if (/(y+)/.test(formatStr)) {
      formatStr = formatStr.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(formatStr))
        formatStr = formatStr.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
    return formatStr;
  },
  /**
   * 格式化日期字符串为日期类型
   * @param {String} dateStr 日期字符串，只支持yyyy-MM-dd HH:mm:ss格式的
   * @returns 返回Date类型
   */
  formatStrToDate(dateStr) {
    if (this.isNull(dateStr)) return null;
    return new Date(dateStr.replace(/-/g, '/'));
  },
  /**
   * 比较两个日期
   * @param {Date} date1 第一个日期
   * @param {Date} date2 第二个日期
   * @returns 返回true和false
   */
  compareDate(date1, date2) {
    if (this.isNull(date1) || this.isNull(date2)) return false;
    return date1.getTime() > date2.getTime();
  },

  /**
   * 数组中是否包含指定的字符串
   * @param {String|Number} value 指定字符串
   * @param {Array} array 查找的数组
   * @returns 返回true和false
   */
  isInArray(value, array) {
    if (this.isNull(value) || this.isNull(array)) return;
    return array.includes(value);
  },
  /**
   * 获得字符串在数组中出现位置
   * @param {*} value 需要在数组中查找位置的字符串
   * @param {Array} array 查找的数组
   * @returns 返回查找到的位置数字
   */
  getIndexInArray(value, array) {
    if (this.isNull(value) || this.isNull(array)) return;
    return array.indexOf(value);
  }
}