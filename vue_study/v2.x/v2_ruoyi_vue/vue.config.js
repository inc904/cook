module.exports = {
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://vue.ruoyi.vip/',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: 'prod-api/',
        },
      },
    },
  },
}
