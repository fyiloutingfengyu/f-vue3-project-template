import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { http } from '@/utils/http';
import { Toast, Dialog, Tabbar, TabbarItem } from 'vant';
import HeaderNav from '@/components/HeaderNav.vue';

if (process.env.VUE_APP_ENV === 'mock' && process.env.NODE_ENV === 'development') {
  require('./mock/index.ts');
}

const app = createApp(App);
app.component('header-nav', HeaderNav);
app.config.globalProperties.$http = http;

app.use(store)
  .use(router)
  .use(Toast)
  .use(Dialog)
  .use(Tabbar)
  .use(TabbarItem)
  .mount('#app');
