import * as types from './mutation-types';
import { CommonState, UserInfo } from '@/interface/common';

const mutations = {
  [types.COMMON_SET_TOKEN](state: CommonState, token: string) {
    state.token = token;
  },
  [types.COMMON_UPDATE_USER_INFO](state: any, userInfo: UserInfo) {
    state.userInfo = userInfo;
  }
};

export default mutations;