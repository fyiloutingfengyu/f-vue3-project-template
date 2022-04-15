const commonConfig = require('./src/config/index.ts');

module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      title: '商城'
    }
  },
  parallel: false, // 处理打包后vant 样式丢失的问题
  lintOnSave: true,
  configureWebpack: (config) => {
    // 生产环境移除console
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 测试环境不压缩js代码
      if (process.env.VUE_APP_ENV === 'test') {
        config.optimization.minimize(false);
      }
    }

    config
      .module
      .rule('images')
      .test(/\.(jpe?g|png|gif)$/i)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 4096, // 小于4KB的图片转base64,大于KB的图片放到CND
        publicPath: `${commonConfig.ENV_URL[process.env.VUE_APP_ENV].cdnURL}/img`,
        outputPath: 'img', // 为空的时候默认在dist目录下
        name: '[name].[ext]' // '[name].[hash].[ext]'
      })
      .end();
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/variables.scss";`
      }
    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
};
