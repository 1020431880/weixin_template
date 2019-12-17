const QQMapSdk = require('qqmap-wx-jssdk.min.js')
const mapSdk = new QQMapSdk({
    key: 'SA5BZ-LCDK3-OGY3F-YRBM2-UBQRZ-JRFX2' // 必填，这里最好填自己申请的的
})

/**
 * 通过小程序获得位置信息
 */
export default {
    /**
     * 小程序获得当前定位经纬度
     */
    getLocation() {
        return new Promise(function (resolve, reject) {
            wx.getLocation({
                type: "wgs84",
                altitude: true,
                success: res => {
                    resolve(res)
                },
                fail: res => {
                    reject(res);
                }
            })
        });
    },
    /**
     * 地址 转 经纬度坐标
     * @param {地址} address 
     */
    transAddressToLocation(address) {
        return new Promise(function (resolve, reject) {
            mapSdk.geocoder({
                address: address,
                success: res => {
                    resolve(res)
                },
                fail: res => {
                    reject(res);
                }
            });
        });
    },
    /**
     * 经纬度 转 详细地址
     * 
     * @param {经度} latitude 
     * @param {维度} longitude 
     */
    transLocationToAddress(latitude, longitude) {
        return new Promise(function (resolve, reject) {
            mapSdk.reverseGeocoder({
                location: {
                    latitude: latitude,
                    longitude: longitude
                },
                success: res => {
                    resolve(res)
                },
                fail: res => {
                    reject(res);
                }
            });
        });
    },
    /**
     * 计算当前位置 距离 结束点经纬度数组的距离
     * @param {需要对比经纬度的数据} to 
     */
    calculateDistance(from, to) {
        return new Promise(function (resolve, reject) {
            mapSdk.calculateDistance({
                from: from,
                mode: "walking",
                to: to,
                success: res => {
                    resolve(res)
                },
                fail: res => {
                    reject(res);
                }
            });
        });
    },
}