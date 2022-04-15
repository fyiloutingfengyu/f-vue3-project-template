/**
 * @desc 登录相关的接口
 */
// 登录
const login = {
  url: '/sales/salesCampusClub/user/login',
  method: 'post',
  response: () => {
    return {
      'code': 200,
      'message': '请求成功',
      'data': {
        'user': {
          'userId': '1294893512101335040',
          'userName': '高校经理',
          'mobile': '18175952435',
          'orgId': '1281133982766993408',
          'orgName': '高校经理',
          'roleKey': 'stuManage',
          'roleName': '高校经理'
        },
        'token': {
          'tokenType': 'Bearer',
          'accessToken': 'eyJhbGciOiJSUzUxMiJ9.eyJNT0JJTEVfUEhPTkUiOiIxODE3NTk1MjQzNSIsIlVTRVJfUk9MRV9LRVkiOiJvcmdNYW5hZ2UiLCJpc3MiOiJxaWFvenVqaSIsInN1YiI6IlNBTEVTX01FTUJFUiIsImF1ZCI6IjEyOTQ4OTM1MTIxMDEzMzUwNDAiLCJpYXQiOjE2MjMxMTk5NTV9.oSWVLDJc0oQ4Du_cDsc13e6bQwFN7ANgSB_6rAWB7eW_nmgZqUwcAEvE6peBN6f_JbpB4g5MNOPDUzSQhiYKkjToJ86mewB0V96dGz8dlojeSLa8YDVLo5zV3nx7oHsPNCjGc2yJMJxOl_ALukVz2XYQ6r1NQugOz71Lj0kxWbHW-V2pwQODmbYI-azumHmHvKfODm_36ts-ANrcLVcwajuZzlIB4j1GVE-WWH7gownXh8bXeES0eZU106UoHaXroXltIbuVL01CQt3IcydloJN-rnMZkdXEPYav26GQt-Wsv41yQjecRVIKM4rJ0ZW-5nxzszuZa8lWNqWQD_VFOw'
        }
      }
    };
  }
};

// 获取验证码
const getLoginCode = {
  url: '/sales/salesCampusClub/user/login/captcha/15011871053',
  method: 'get',
  response: () => {
    return {
      code: 200,
      data: {},
      message: 'success'
    };
  }
};

module.exports = [
  login,
  getLoginCode
];
