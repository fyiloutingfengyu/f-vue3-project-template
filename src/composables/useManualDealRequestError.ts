/**
 * @description: 手动处理HTTP错误
 * @date: 2021/6/10
 */
import { Toast } from 'vant';
import { DOMAIN, removeLocalStorage } from '@/utils/common';
import { STORAGE_NAME } from '@/utils/constant';
import { AxiosError } from 'axios';

export default function useManualDealRequestError() {
  const manualDealHttpError = (error: AxiosError) => {
    if (error.response) {
      switch (error.response.status) {
        case 401: // 未登录、登陆过期
        case 402: // 未登录、登陆过期
          Toast.fail('身份认证失败,请重新登录！');
          removeLocalStorage(STORAGE_NAME.token);

          if (window.location.pathname !== '/login') {
            setTimeout(() => {
              window.location.href = `${ DOMAIN }/login?redirect=${ encodeURIComponent(window.location.href) }`;
            }, 1000);
          }

          break;
        case 500:
          Toast.fail(error.response.data.message);
          break;
        default:
          if (process.env.VUE_APP_ENV !== 'production') {
            Toast.fail(error.response.data.message);
          } else {
            Toast.fail('服务异常，请稍后再试！');
          }
      }
    } else if (error.request) {
      Toast.fail(error.message);
    } else {
      Toast.fail(error.message);
    }
  };

  return {
    manualDealHttpError
  };
}
