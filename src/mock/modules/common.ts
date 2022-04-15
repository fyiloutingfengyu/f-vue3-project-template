/**
 * @description: 公共接口
 */
// 获取验证码
const getCode = {
  url: '/sales/salesCampusClub/user/captcha',
  method: 'get',
  response: () => {
    return {
      code: 200,
      data: {},
      message: 'success'
    };
  }
};

// 获取用户信息
const userInfo = {
  url: '/sales/salesCampusClub/user',
  method: 'get',
  response: () => {
    return {
      "success" : true,
      "code" : 200,
      "message" : "请求成功",
      "timestamp" : "2021-06-08 11:28:40",
      "data" : {
        "userId" : "1294893512101335040",
        "userName" : "营销总监1号",
        "mobile" : "18175952435",
        "orgId" : "1281133982766993408",
        "orgName" : "市场部",
        "roleKey" : "orgManage",
        "roleName" : "营销总监"
      }
    };
  }
};

module.exports = [
  getCode,
  userInfo
];
