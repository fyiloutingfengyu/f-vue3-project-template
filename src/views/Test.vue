<template>
  <div class="home">
    获取state数据：
    获取state值：{{ myNum }}
    &#8195;
    通过getters获取值：{{ getNum }}
    &#8195;
    通过getters获取*2后的值：{{ getDoubleNum }}
    <br/><br/>
    更改state数据：
    <button @click="addNumByOne">自增1</button>
    <button @click="addNumByNum(10)">增加指定数</button>
    <button @click="addNumByAction(20)">异步增加指定数</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Test',
  setup() {
    const store = useStore();

    return {
      myNum: computed(() => store.state.test.num),
      getNum: computed(() => store.getters['test/getNum']),
      getDoubleNum: computed(() => store.getters['test/getDoubleNum']),
      addNumByOne: () => {
        store.commit('test/addNumByOne');
      },
      addNumByNum: (num: number) => {
        store.commit('test/addNumByNum', num);
      },
      addNumByAction: (num: number) => store.dispatch('test/addNumByAction', num)
    };
  }
});

</script>

<style scoped>

</style>