// 首页基础逻辑
import { reactive } from 'vue';
import { Toast } from 'vant';
import { setPageTitle } from '@/utils/common';
import salesDataApi from '@/api/sales-data';
import { http } from '@/utils/http';
import { ServerResponse } from '@/interface/common';

export default function useIndex(store: any, router: any) {
  const data = reactive({
    userRoleKey: '', // 角色key
    activeName: 'day', // 默认的Tab name
    pageData: {
      current: 1,
      size: 10
    },
    // 查询条件
    searchOptions: {
      startDate: '',
      endDate: '',
      pageType: '',
      queryName: '',
      queryId: ''
    }
  });

  // 设置页面标题
  setPageTitle('首页', store);

  // 获取用户角色
  const userInfo = store.getters['common/getUserInfo'];

  data.userRoleKey = userInfo.roleKey || '';

  // 未登录则先跳转到登录页面登录
  if (!data.userRoleKey) {
    Toast({
      message: '请先登录后再操作！',
      duration: 1500,
    });

    setTimeout(() => {
      router.replace({
        path: '/login'
      });
    }, 1500);

    return {
      data
    };
  }

  // 设置查询参数
  data.searchOptions.pageType = data.userRoleKey;
  store.commit('updateSearchParams', data.searchOptions);

  // 查询统计数据
  const getStatisticsData = () => {
    const param = Object.assign(data.pageData, data.searchOptions);

    http({
      url: salesDataApi.salesData.url,
      method: salesDataApi.salesData.method,
      isLoading: true,
      params: param
    }).then((res: ServerResponse) => {
      if (res.data && res.data.total) {
        store.commit('updateSalesData', res.data.total);
      }
    });
  };

  getStatisticsData();

  return {
    data
  };
}
