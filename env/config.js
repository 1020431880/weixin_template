const ENV = "local"

const config = {
  local: {
    API_URL: "http://localhost:5000",
    APPID: "wxbef61728f6bee6b0",
    APP_SECRET: "643cc852782efefcf518ea9fb9b10a48"
  },
  dev: {
    API_URL: "http://localhost:8080",
    APPID: "wxbef61728f6bee6b0",
    APP_SECRET: "643cc852782efefcf518ea9fb9b10a48"
  },
  pre: {
    API_URL: "http://localhost:8080",
    APPID: "wxbef61728f6bee6b0",
    APP_SECRET: "643cc852782efefcf518ea9fb9b10a48"
  },
  pro: {
    API_URL: "http://localhost:8080",
    APPID: "wxbef61728f6bee6b0",
    APP_SECRET: "643cc852782efefcf518ea9fb9b10a48"
  }
}

export default config[ENV]