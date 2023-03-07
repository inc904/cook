module.exports = {
  configureWebpack: (config) => {
    //调试JS
    // config.devtool = 'source-map'
    config.devtool = 'cheap-module-source-map'
  },
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://vue.ruoyi.vip/',
        changeOrigin: true,
        // logLevel: 'debug',
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: 'prod-api/',
        },
      },
    },
  },
}
