/**
 * @description: 公共配置
 */

// 接口域名
const ENV_URL = {
  // 生产环境
  production: {
    baseURL: 'https://flms-api.prd.qiaozuji.com',
    cdnURL: 'https://qiaozuji-flms-public.cdn.qiaozuji.com/resource/h5'
  },
  // 测试环境
  test: {
    baseURL: 'https://qiaozuji-flms-api.test.timedigit.com',
    cdnURL: 'https://test-qiaozuji-flms-public.cdn.qiaozuji.com/resource/h5'
  },
  // 开发环境
  development: {
    baseURL: 'http://172.18.0.104:30010',
    // baseURL: 'https://yapi.timedigit.com/mock/110',
    // baseURL: 'https://qiaozuji-flms-api.test.timedigit.com',
    cdnURL: ''
  },
  // 数据mock
  mock: {
    baseURL: '',
    cdnURL: ''
  }
};

// @ts-ignore // todo f
const BASE_URL = ENV_URL[process.env.VUE_APP_ENV].baseURL;

module.exports = {
  BASE_URL,
  ENV_URL
};
