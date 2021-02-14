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
      '^/api/': {
        target: 'http://localhost:8081/dagoan.in/',
        changeOrigin: true,
        pathRewrite: { '^/api/': '/api/' },
        logLevel: 'debug'
      }
      // '/v3/*': {
      //   target: 'https://run.mocky.io/',
      //   changeOrigin: true,
      //   secure: false,
      //   logLevel: 'debug'
      // },
      // '^/api/': {
      //   target: 'http://dummy.restapiexample.com/',
      //   changeOrigin: true,
      //   pathRewrite: { '^/api/': '/api/' },
      //   logLevel: 'debug'
      // }
    }
  }
}
