import { createStore } from 'vuex';
import common from './modules/common/index';
import test from './modules/test';

export default createStore({
  state: {
    // 销售数据统计
    totalSalesData: {},
    // 数据列表搜索参数
    searchParams: {},
    // 导航的title
    title: ''
  },
  mutations: {
    // 更新销售数据
    updateSalesData(state, newData) {
      state.totalSalesData = newData;
    },

    // 更新搜索参数
    updateSearchParams(state, newData) {
      state.searchParams = newData;
    },

    // 更新title
    updateTitle(state, newData) {
      state.title = newData;
    }
  },
  actions: {},
  modules: {
    common,
    test
  }
});
