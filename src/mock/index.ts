/**
 * ts中mock数据要同时安装 @types/mockjs 和 mockjs
 * @types/mockjs是mockjs的TypeScript定义
 */
import Mock from 'mockjs';

const mockFiles = require.context('./modules', true, /\.ts$/);
const mocks: any[] = [];

mockFiles.keys().forEach(key => {
  mocks.push(...mockFiles(key));
});

mocks.forEach(item => {
  Mock.mock(RegExp(item.url + '.*'), item.method, item.response);
});

// 注意事项：
// 1、请求的方法使用小写，如'get', 'GET'不生效；
