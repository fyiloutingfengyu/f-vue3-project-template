<template>
  <div class="custom-dialog-component">
    <van-popup
      v-model:show="isShowDialog"
      :close-on-click-overlay="false"
    >
      <img v-if="iconPath" class="icon-box" :src="iconPath" alt="">
      <p class="description">{{ description }}</p>
      <div class="btn-box">
        <slot name="button"></slot>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Popup } from 'vant';

export default defineComponent({
  name: 'CustomDialog',
  components: {
    [Popup.name]: Popup
  },
  props: {
    iconPath: { // 图片地址
      type: String
    },
    description: { // 描述文字
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isShowDialog: false
    };
  }
});
</script>

<style lang="scss" scoped>
  .custom-dialog-component {
    :deep(.van-popup) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      width: 702px;
      margin: 0 auto;
      padding: 64px 24px 42px;
      border-radius: 8px;
      background-color: #fff;

      .icon-box {
        width: 128px;
        height: 128px;
        margin-bottom: 40px;
      }

      .description {
        line-height: 50px;
        font-size: 36px;
        color: $font-color-main;
        text-align: center;
        margin-bottom: 24px;
      }

      .btn-box {
        margin: 0 auto;
      }
    }
  }
</style>
