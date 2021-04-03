// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    publicPath:'./',
    outputDir:'docs',
    css: {
        loaderOptions: {
          // 给 less-loader 传递 Less.js 相关选项
          less:{
            // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
            // `primary` is global variables fields name
            additionalData: `@import "~@/assets/css/global.less";`
          }
        }
      }
}