const path = require('path')
const fs = require('fs')
const lessToJS = require('less-vars-to-js')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/styles/antd-vars.less'), 'utf8')
)
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true, // 加载LESS 需要把JS设置一下
          modifyVars: themeVariables
        }
      }
    }
  }
}
