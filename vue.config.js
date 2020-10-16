const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  chainWebpack (config) {
    config.plugins.delete('prefetch')
    // and this line
    config.plugin('CompressionPlugin').use(CompressionPlugin)
  },
  // assetsDir: 'static',
  // lintOnSave: false,

  // proxy table
  devServer: {
    proxy: {
      '/v3/*': {
        target: 'https://run.mocky.io/',
        changeOrigin: true,
        secure: false
      },
      '^/api/': {
        target: 'http://dummy.restapiexample.com/',
        changeOrigin: true,
        pathRewrite: { '^/api/': '/api/' },
        logLevel: 'debug'
      }
    }
  }
}
