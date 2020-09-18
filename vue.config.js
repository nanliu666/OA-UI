const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // only package third parties that are initially dependent
        }
      }
    })
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true // 加载LESS 需要把JS设置一下
        }
      }
    }
  }
}
