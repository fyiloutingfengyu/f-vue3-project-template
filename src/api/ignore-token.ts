/**
 * @description: 不需要校验登录态的接口
 */
const ignoreTokenUrl = [
  '/sales/salesCampusClub/user/login',  //登录
  '/sales/salesCampusClub/user/captcha' //获取验证码
];

export {
  ignoreTokenUrl
};
