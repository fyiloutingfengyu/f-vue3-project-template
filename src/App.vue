<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';
import { getLocalStorage } from '@/utils/common';
import { COMMON_SET_TOKEN, COMMON_UPDATE_USER_INFO } from '@/store/modules/common/mutation-types';
import { STORAGE_NAME } from '@/utils/constant';

export default defineComponent({
  name: 'App',
  created() {
    const accessToken = getLocalStorage(STORAGE_NAME.TOKEN);
    const userInfo = getLocalStorage(STORAGE_NAME.USER_INFO);

    if (accessToken) {
      this.COMMON_SET_TOKEN(accessToken);
    }

    if (userInfo) {
      this.COMMON_UPDATE_USER_INFO(JSON.parse(userInfo));
    }
  },
  methods: {
    ...mapMutations('common', [
      COMMON_SET_TOKEN,
      COMMON_UPDATE_USER_INFO
    ])
  }
});
</script>

<style lang="scss">
@import 'styles/reset.scss';
@import 'styles/common.scss';

#app {
  font-family: PingFangSC-Regular, PingFang SC, "Noto Sans", Avenir, Helvetica, Arial, sans-serif;
  /* 对字体进行抗锯齿渲染可以使字体看起来会更清晰舒服 */
  -webkit-font-smoothing: antialiased; /* chrome、safari */
  -moz-osx-font-smoothing: grayscale; /* firefox */
}
</style>
