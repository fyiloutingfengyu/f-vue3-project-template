<template>
  <div class="header-nav-component van-hairline--bottom">
    <i v-if="isShowBackBtn" class="left-arrows" @click="goBack"></i>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderNav',
  data() {
    return {
      title: this.$store.state.title,
      path: ''
    };
  },
  computed: {
    isShowBackBtn(): boolean {
      const noBackRouteList = ['/', '/login', '/register-success'];

      return !(noBackRouteList.includes(this.path) || this.path.startsWith('/register/'));
    }
  },
  watch: {
    '$route'() {
      this.path = this.$route.path;
      this.title = this.$store.state.title;
    }
  },
  mounted() {
    this.path = this.$route.path;
    this.title = this.$store.state.title;
  },
  methods: {
    // 返回上一页
    goBack() {
      history.go(-1);
    }
  }
});
</script>

<style lang="scss" scoped>
  .header-nav-component {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 74px;
    font-size: 30px;
    font-family: PingFangSC-Medium, PingFang SC;
    background-color: #fff;

    .left-arrows {
      position: absolute;
      left: 24px;
      top: 15px;
      display: block;
      width: 44px;
      height: 44px;
      background: url('../assets/images/icons/left_arrows@2x.png') no-repeat center;
      background-size: 20px;
    }

    .title {
      height: 74px;
      line-height: 74px;
      text-align: center;
    }
  }
</style>
