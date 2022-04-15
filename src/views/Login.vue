<template>
  <div class="login-page">
    <div class="brand-box">
      <img class="logo" src="@/assets/images/common/logo@2x.png" alt="">
      <div class="brand-name-domain">
        <p class="name">俏回收</p>
        <p class="domain">qhs.com</p>
      </div>
    </div>
    <van-form class="from-box" ref="loginForm" :show-error="false">
      <van-field
          v-model="phoneNum"
          name="validatePhone"
          label="手机号"
          clearable
          maxlength="11"
          placeholder="请输入手机号"
          :rules="[{validator: validatePhone, message: '请输入正确的手机号码' }]"
      />
      <van-field
          v-model="captcha"
          clearable
          maxlength="6"
          label="验证码"
          placeholder="请输入验证码"
          :rules="[{ validator: validateCode, message: '请输入正确的验证码' }]"
      >
        <template #button>
          <send-verification-code
              class="get-code"
              init-text="点击获取"
              :url-word="phoneNum"
              :request-options="codeRequestOptions"
              :validate-func="validateFunc"
          >
          </send-verification-code>
        </template>
      </van-field>
      <button class="login-btn" type="button" @click="login">登录</button>
    </van-form>
    <ul class="tips-content">
      <li>
        温馨提示：
      </li>
      <li>
        1、请输入入职时提供的手机号；
      </li>
      <li>
        2、仅需登录一次，登录成功后，可直接使用管理工具；
      </li>
      <li>
        3、如需改绑手机号，请联系管理人员。
      </li>
    </ul>
    <custom-dialog
        ref="customDialog"
        :icon-path="dialogInfo.iconPath"
        :description="dialogInfo.description">
      <template v-slot:button>
        <button
            v-if="dialogInfo.status==='success'"
            class="confirm-btn"
            type="button"
            @click="goToHome"
        >
          返回首页
        </button>
        <button v-else class="confirm-btn" type="button" @click="closeDialog">了解</button>
      </template>
    </custom-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';
import { Button, Form, Field } from 'vant';
import SendVerificationCode from '@/components/SendVerificationCode.vue';
import CustomDialog from '@/components/CustomDialog.vue';
import loginApi from '@/api/login';
import { setLocalStorage, setPageTitle } from '@/utils/common';
import { regExpObj } from '@/utils/regexp';
import { STORAGE_NAME } from '@/utils/constant';
import { AxiosResponse } from 'axios';
import { COMMON_SET_TOKEN, COMMON_UPDATE_USER_INFO } from '@/store/modules/common/mutation-types';

export default defineComponent({
  name: 'Login',
  components: {
    [Button.name]: Button,
    [Form.name]: Form,
    [Field.name]: Field,
    SendVerificationCode,
    CustomDialog
  },
  data() {
    return {
      phoneNum: '',
      captcha: '',
      redirect: this.$route.query.redirect || '',
      // 弹窗配置，默认参数是成功的参数
      dialogInfo: {
        iconPath: '',
        description: '',
        status: ''
      },
      // 短信验证码相关请求参数
      codeRequestOptions: {
        url: loginApi.getLoginCode.url,
        isRepeatable: false,
        isLoading: true
      }
    };
  },
  created() {
    setPageTitle('员工登录', this.$store);
  },
  methods: {
    ...mapMutations('common', [
      COMMON_SET_TOKEN,
      COMMON_UPDATE_USER_INFO
    ]),
    // 校验手机号码
    validatePhone(val: string) {
      return regExpObj.telephone.test(val);
    },

    // 校验短信验证码
    validateCode(val: string) {
      return regExpObj.sixCode.test(val);
    },
    // 发送验证码前先校验一下手机号码
    validateFunc() {
      this.$refs.loginForm.validate('validatePhone');

      return regExpObj.telephone.test(this.phoneNum);
    },

    // 回到首页
    goToHome() {
      this.$router.replace({
        path: '/'
      });
    },
    // 关闭弹窗
    closeDialog() {
      this.$refs.customDialog.isShowDialog = false;
    },
    // 登录
    login() {
      this.$refs.loginForm.validate()
          .then(() => {
            // 表单校验通过后提交数据
            this.submitLoginInfo();
          });
    },
    // 提交登录数据给后台
    submitLoginInfo() {
      this.$http({
        url: loginApi.login.url,
        method: loginApi.login.method,
        params: {
          phoneNum: this.phoneNum,
          captcha: this.captcha
        },
        isManualDealError: true
      }).then((res: AxiosResponse) => {
        const resultData = res.data || {};

        if (resultData.code) {
          if (resultData.code === 200) {
            const accessToken = resultData.data.token?.accessToken || '';

            if (accessToken) {
              setLocalStorage(STORAGE_NAME.TOKEN, accessToken);
              setLocalStorage(STORAGE_NAME.USER_INFO, JSON.stringify(resultData.data.user));
              this.COMMON_SET_TOKEN(accessToken);
              this.COMMON_UPDATE_USER_INFO(resultData.data.user);
            }

            if (this.redirect) {
              window.location.replace(String(this.redirect));
            } else {
              // 展示弹窗
              this.dialogInfo.iconPath = require('../assets/images/common/success_icon@2x.png');
              this.dialogInfo.description = '登录成功';
              this.dialogInfo.status = 'success';
              this.$refs.customDialog.isShowDialog = true;
            }
          } else {
            // 展示弹窗
            this.dialogInfo.iconPath = require('../assets/images/common/close_icon@2x.png');
            this.dialogInfo.description = resultData.message;
            this.dialogInfo.status = 'fail';
            this.$refs.customDialog.isShowDialog = true;
          }
        }
      });
    }
  }
});

</script>
<style lang="scss" scoped>
.login-page {
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: 90px;
  background-color: #fff;

  .brand-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 110px;

    .logo {
      width: 100px;
      height: 100px;
      margin-right: 24px;
    }

    .brand-name-domain {
      .name {
        height: 67px;
        line-height: 67px;
        font-size: 48px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: $font-color-main;
      }

      .domain {
        height: 33px;
        line-height: 29px;
        font-size: 24px;
        font-family: Helvetica;
        color: $font-color-main;
      }
    }
  }
}

.from-box {
  :deep(.van-field__label) {
    color: $font-color-main;
  }

  .get-code {
    color: $color-primary;
  }

  .login-btn {
    display: block;
    width: 702px;
    height: 98px;
    margin: 40px auto 0;
    color: #fff;
    font-size: 36px;
    border-radius: 8px;
    border: none;
    background: linear-gradient(90deg, rgba(84, 148, 245, 1) 0%, rgba(84, 99, 245, 1) 100%);
  }
}

.tips-content {
  width: 702px;
  margin: 24px auto;
  line-height: 34px;
  font-size: 22px;
  color: $font-color-minor;
}

.confirm-btn {
  width: 339px;
  height: 88px;
  border: 2px solid $color-primary;
  border-radius: 8px;
  background-color: #fff;
}
</style>
