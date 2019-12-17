*使用步骤
1.npm install 安装依赖
2.点击小程序开发工具的菜单，工具》构建npm， 等待弹框提示构建好，然后在工具右侧的开发详情里勾选【使用npm构建模块】

*目录说明
assets # 资源文件，存放图片等
  -images # 图片资源
  -js #自定义的js
components # 自定义组件
env # 连接环境
  -config.js # 配置文件，连接后台环境，上线要修改
libs # 引入第三方的包，组件，js等
  -request.js # 仿照axios封装wx.request()的js
pages # 小程序源码目录
styles # 自定义的样式文件
utils # 工具包
  -http.js # 封装的http请求工具，可以设置拦截器
  -util.js # 封装的工具类
app.js # 小程序功入口js
app.json # 小程序全局配置文件
app.wxss # 小程序全局样式
package.json # npm构建使用package.json
project.config.json # 项目配置
README.MD # 介绍小程序集成框架使用方法