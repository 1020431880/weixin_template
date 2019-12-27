// 链接后台的环境
const ENV = "local"
// 链接配置
const config = {
  // 本地环境
  local: {
    API_URL: "http://localhost:5000",
    APPID: "wxbef61728f6bee6b0",
    APP_SECRET: "643cc852782efefcf518ea9fb9b10a48"
  },
  // 开发环境
  dev: {
    API_URL: "http://localhost:8080",
    APPID: "wxbef61728f6bee6b0",
    APP_SECRET: "643cc852782efefcf518ea9fb9b10a48"
  },
  // 预发布环境
  pre: {
    API_URL: "http://localhost:8080",
    APPID: "wxbef61728f6bee6b0",
    APP_SECRET: "643cc852782efefcf518ea9fb9b10a48"
  },
  // 线上环境
  pro: {
    API_URL: "http://localhost:8080",
    APPID: "wxbef61728f6bee6b0",
    APP_SECRET: "643cc852782efefcf518ea9fb9b10a48"
  }
}
// 导出配置
export default config[ENV]