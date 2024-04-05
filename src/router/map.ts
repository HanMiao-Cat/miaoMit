import type { RouteLocationNormalized } from 'vue-router';
import storage from 'store';

// 白名单登录
export const withListHandle = (to: RouteLocationNormalized) => {
  const token = to.query?.token ?? '';
  token && storage.set('token', token);
  delete to.query?.token;
  return to.path;
};