import { CommonState } from '@/interface/common';

const getters = {
  getToken(state: CommonState) {
    return state.token;
  },
  getUserInfo(state: CommonState) {
    return state.userInfo;
  }
};

export default getters;