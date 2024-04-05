import { createRouter, createWebHistory } from 'vue-router';
import permission from './permission';

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue')
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/pages/error/403.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/error/404.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

permission(router);

export default router;
