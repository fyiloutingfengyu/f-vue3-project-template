import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '../views/Index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/login', // 登录
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/:catchAll(.*)', // 404  todo f 404页面
    name: 'NotFound',
    component: () => import('../views/Index.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
