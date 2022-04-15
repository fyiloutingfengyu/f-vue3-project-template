import * as types from './mutation-types';

const actions = {
  // @ts-ignore
  addNumByAction({commit}, num: number) {
    // 异步操作
    setTimeout(function () {
      // 调用mutations里的方法来修改state
      commit(types.ADD_NUM_BY_NUM, num);
    }, 1000);
  }
};

export default actions;