const path = require('path');
module.exports = ({ file }) => {
  // 兼容vant,因为vant设计的宽度为375
  const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 375 : 750;

  return {
    plugins: {
      'postcss-px-to-viewport': {
        unitToConvert: 'px',
        viewportWidth: designWidth, // UI设计稿的宽度
        unitPrecision: 6, // 转换后的精度，即小数点位数
        propList: ['*'], // *表明所有css属性的单位都进行转换
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1, // 小于或等于1px则不进行转换
        mediaQuery: false, // 是否在媒体查询的css代码中也进行转换
        replace: true, // 是否转换后直接更换属性值
        exclude: [],
        landscape: false // 是否处理横屏情况
      }
    }
  };
};
