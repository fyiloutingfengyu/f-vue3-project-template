<template>
  <div class="home-page">
    <div class="data-box">
      <div class="data-statistics">
        <van-tabs class="tab-list"
                  v-model:active="activeName"
                  title-inactive-color="white"
                  title-active-color="white"
                  @change="dateTabChange"
        >
          <van-tab title="当天" name="day"></van-tab>
          <van-tab title="当月" name="month"></van-tab>
          <van-tab title="总计" name="all"></van-tab>
        </van-tabs>
      </div>
      <data-info :role-key="userRoleKey" :search-date="defaultDate"></data-info>
    </div>
  </div>
</template>

<script lang="ts">
import { toRefs, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { Tab, Tabs } from 'vant';
import DataInfo from '@/components/index/DataInfo.vue';
import useIndex from '@/composables/home/useIndex';
import useTabSearch from '@/composables/useTabSearch';

export default defineComponent({
  name: 'Index',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    DataInfo
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const {
      data
    } = useIndex(store, router);

    const {
      defaultDate,
      dateTabChange
    } = useTabSearch(store);

    return {
      ...toRefs(data),
      defaultDate,
      dateTabChange
    };
  }
});
</script>

<style lang="scss" scoped>
.home-page {
  padding: 0 0 120px;

  .data-box {
    background-color: #fff;
  }

  .data-statistics {
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;

    .search-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      width: 702px;
      height: 84px;
      padding: 16px 24px 26px;
      margin-bottom: 40px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.1);

      .date-range {
        display: flex;
        align-items: center;

        .date-icon {
          display: block;
          width: 42px;
          height: 42px;
          margin-right: 16px;
          background: url('../assets/images/icons/date_icon@2x.png') no-repeat center;
          background-size: 42px 42px;
        }

        .date-text {
          width: 320px;
          height: 38px;
          line-height: 38px;
          color: #fff;
          font-size: 26px;
          font-family: DIN-Medium, DIN;
          font-weight: 500;
        }
      }

      .search-icon {
        display: block;
        width: 33px;
        height: 33px;
        background: url('../assets/images/icons/search_icon@2x.png') no-repeat center;
        background-size: 33px 33px;
      }
    }

    .tab-list {
      height: 84px;

      :deep(.van-tabs__nav) {
        background: rgba(238, 238, 238, 0.2);

        .van-tabs__line {
          background-color: $color-primary;
        }

        .van-tab__text {
          font-size: 32px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: $font-color-main;
        }
      }

      :deep(.van-tabs__content) {
        padding-top: 20px;
      }
    }
  }

}
</style>
