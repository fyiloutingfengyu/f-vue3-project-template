<template>
  <div class="data-info-component">
    <ul class="total-info">
      <li class="total-content">
        <div class="total-money">{{ totalData.orderRentalSum }}</div>
        <div class="name-box">
          <span class="name">成交订单金额</span>
          <i class="badge">￥</i>
        </div>
      </li>
      <li class="line"></li>
      <li class="total-content">
        <div class="total-count">{{ totalData.orderNum }}</div>
        <div class="name-box">
          <span class="name">成交订单数</span>
          <i class="badge">订</i>
        </div>
      </li>
    </ul>
    <ul class="detail-info">
      <li>
        <div class="money">{{ totalData.scanNum }}</div>
        <div class="name">扫码成功数</div>
      </li>
      <li>
        <div class="money">{{ totalData.identifyNum }}</div>
        <div class="name">验证成功数</div>
      </li>
      <li>
        <div class="money">{{ totalData.orderingNum }}</div>
        <div class="name">下单数</div>
      </li>
    </ul>
    <ul class="detail-info">
      <li>
        <div class="money">{{ totalData.noScanOrderingNum }}</div>
        <div class="name">非扫码下单数</div>
      </li>
      <li>
        <div class="money">{{ totalData.orderPassNum }}</div>
        <div class="name">审批通过数</div>
      </li>
      <li>
        <div class="money">{{ totalData.orderRejectNum }}</div>
        <div class="name">审批拒绝数</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const totalData = computed(() => {
      return store.state.totalSalesData;
    });

    return {
      totalData
    };
  }
});
</script>

<style lang="scss" scoped>
.data-info-component {
  padding-top: 22px;
  background-color: #fff;

  .total-info {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    margin: 44px auto 52px;

    .total-content {
      flex: 1;
      width: 250px;
      padding: 0 10px;
      text-align: center;

      .total-money,
      .total-count {
        height: 54px;
        line-height: 54px;
        margin-bottom: 16px;
        font-size: 45px;
        font-family: DIN-Medium, DIN;
        font-weight: 500;
        color: $font-color-main;
      }

      .name-box {
        display: flex;
        align-items: center;
        justify-content: center;

        .name {
          height: 30px;
          line-height: 30px;
          margin-right: 8px;
          font-size: 22px;
          color: #4A4A4A;
        }

        .badge {
          width: 25px;
          height: 25px;
          line-height: 25px;
          border-radius: 4px;
          font-size: 18px;
          font-style: normal;
          color: #fff;
          background: #FFCE00;
        }
      }
    }

    .line {
      width: 1px;
      height: 120px;
      background: #9B9B9B;
      opacity: 0.49;
    }
  }

  .detail-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      width: 200px;
      margin-bottom: 16px;
    }

    .money {
      height: 44px;
      line-height: 44px;
      font-size: 28px;
      font-family: DIN-Medium, DIN;
      font-weight: 500;
      text-align: center;
      color: #3B3B3B;
    }

    .name {
      height: 34px;
      line-height: 34px;
      font-size: 24px;
      text-align: center;
      color: #454545;
    }
  }
}
</style>
