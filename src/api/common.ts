/**
 * @description: 公共接口
 */
export default {
  // 获取验证码
  getCode: {
    url: '/sales/salesCampusClub/user/captcha',
    method: 'get'
  },

  // 获取用户信息
  userInfo: {
    url: '/sales/salesCampusClub/user',
    method: 'get'
  }
};
