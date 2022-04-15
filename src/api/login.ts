/**
 * @desc 登录相关的接口
 */
export default {
  // 获取验证码
  getLoginCode: {
    url: '/sales/salesCampusClub/user/login/captcha',
    method: 'get'
  },

  // 登录
  login: {
    url: '/sales/salesCampusClub/user/login',
    method: 'post'
  }
};
