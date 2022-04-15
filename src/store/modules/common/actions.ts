import * as types from './mutation-types';

const actions = {
  // @ts-ignore
  updateUserInfoAction({commit}, num: number) {
    setTimeout(() => {
      commit(types.COMMON_UPDATE_USER_INFO, num);
    }, 1000);
  }
};

export default actions;