/**
 * @description: 日期Tab页切换搜索
 */
import { reactive, toRefs } from 'vue';
import { dateFormat } from '@/utils/common.ts';

export default function useTabSearch(store: any) {
  const stateData = reactive({
    defaultDate: [new Date(), new Date()], // 默认日期
    // 查询条件
    dateParams: {
      startDate: '',
      endDate: ''
    }
  });

  // 选中日期后搜索
  const dateChange = (date: any) => {
    stateData.defaultDate = date;

    if (date && date.length) {
      stateData.dateParams.startDate = dateFormat(date[0], 'yyyy-MM-dd');
      stateData.dateParams.endDate = dateFormat(date[1], 'yyyy-MM-dd');
    } else {
      stateData.dateParams.startDate = '';
      stateData.dateParams.endDate = '';
    }

    store.commit('updateSearchParams', Object.assign({}, store.state.searchParams, stateData.dateParams));
  };

  // 初始化日期组件
  dateChange([new Date(), new Date()]);

  // 切换tab
  const dateTabChange = (name: string) => {
    const nowDate = new Date();

    if (name === 'day') {
      dateChange([nowDate, nowDate]);
    } else if (name === 'month') {
      const year = nowDate.getFullYear();
      const month = nowDate.getMonth() + 1;

      dateChange([new Date(`${year}/${month}/1`), nowDate]);
    } else {
      dateChange([]);
    }
  };

  return {
    ...toRefs(stateData),
    dateTabChange
  };
}
