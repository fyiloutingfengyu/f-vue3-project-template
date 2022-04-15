<template>
  <div class="send-code-component">
    <div v-if="!auto"
         @click="sendVerificationCode('first')">{{initText}}
    </div>
    <div v-else>
      <div v-show="time>0" class="disabled">
        {{time}}{{contDownText}}
      </div>
      <div v-show="time===0" @click="sendVerificationCode">{{resendText}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HttpOptions, ServerResponse } from '@/interface/common';

export default defineComponent({
  name: 'SendVerificationCode',
  props: {
    isAuto: { // 是否自动发送验证码
      type: Boolean,
      default: false
    },
    initText: {
      type: String,
      default: '获取验证码'
    },
    startTime: { // 倒计时起始值
      type: Number,
      default: 60
    },
    contDownText: { // 倒计时的时候的文字
      type: String,
      default: 's后重发'
    },
    resendText: { // 重新发送的提示文字
      type: String,
      default: '重发验证码'
    },
    requestOptions: {
      type: Object,
      default: () => {
        return {};
      }
    },
    urlWord: { // URL拼接的字符串
      type: String,
      default: ''
    },
    validateFunc: { // 发送验证码前的校验
      type: Function,
      default: () => {
        return true;
      }
    }
  },
  data() {
    return {
      time: this.startTime,
      auto: this.isAuto
    };
  },
  methods: {
    // 倒计时
    countDown() {
      const timer = setInterval(() => {
        this.time--;

        if (this.time <= 0) {
          clearInterval(timer);
        }
      }, 1000);
    },
    // 发送验证码
    sendVerificationCode(flag: string) {
      // 因为验证码的组件有可能嵌套在页面的子组件中，所以使用this.$parent调用父组件的方法可能会取不到
      if (!this.validateFunc()) {
        return false;
      }

      const options: HttpOptions = {
        url: this.requestOptions.url,
        method: this.requestOptions.method || 'get',
        isLoading: this.requestOptions.isLoading || true
      };

      if (this.urlWord) {
        options.url = `${ options.url }/${ this.urlWord }`;
      }

      if (this.requestOptions.params) {
        options['params'] = this.requestOptions.params;
      }

      this.$http(options).then((res: ServerResponse) => {
        if (res.code === 200) {
          if (flag === 'first') {
            this.auto = true;
          }

          this.time = this.startTime;
          this.countDown();

          this.$emit('getVerificationCodeKey', res.data);
        }
      });
    }
  }
});
</script>

<style lang="scss" scoped>
  .send-code-component {
    .disabled {
      color: $color-placeholder;
    }
  }
</style>
