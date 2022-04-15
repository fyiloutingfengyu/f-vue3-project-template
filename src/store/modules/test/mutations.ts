import * as types from './mutation-types';

const mutations = {
  [types.ADD_NUM_BY_ONE](state: any) {
    state.num++;
  },
  [types.ADD_NUM_BY_NUM](state: any, num: number) {
    state.num += num;
  }
};

export default mutations;