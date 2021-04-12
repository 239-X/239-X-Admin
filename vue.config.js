// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: './',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        additionalData: `@import "~@/assets/css/global.less";`,
        lessOptions: {
          /**
           * @primary-color: #1890ff; // 全局主色
              @link-color: #1890ff; // 链接色
              @success-color: #52c41a; // 成功色
              @warning-color: #faad14; // 警告色
              @error-color: #f5222d; // 错误色
              @font-size-base: 14px; // 主字号
              @heading-color: rgba(0, 0, 0, 0.85); // 标题色
              @text-color: rgba(0, 0, 0, 0.65); // 主文本色
              @text-color-secondary: rgba(0, 0, 0, 0.45); // 次文本色
              @disabled-color: rgba(0, 0, 0, 0.25); // 失效色
              @border-radius-base: 4px; // 组件/浮层圆角
              @border-color-base: #d9d9d9; // 边框色
              @box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影
           */
          modifyVars: {
            'primary-color': 'red',
            'link-color': 'red',
            'order-color-base': '#d9d9d9',
            'border-color-base:':'red',
            'heading-color':'red',
            'success-color':'green',
            'text-color:':'green',
            'text-color-secondary':'green'
          },
          javascriptEnabled: true,
        },

      }

    }
  }
}