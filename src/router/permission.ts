import type { Router } from 'vue-router';
import storage from 'store';
import { setTitle } from '@/utils/index';
import { useUserStore } from '@/stores/index';
// import { withListHandle } from './map';

const loginPath = '/login';

const defaultPath = '/home';

const whiteListPath: string[] = [];

const appTitle = import.meta.env.VITE_SOME_TITLE;

export default (router: Router) => {
  router.beforeEach(async (to, _, next) => {
    if (storage.get('token')) {
      if (to.path === loginPath) next({ path: defaultPath });
      else {
        const userStore = useUserStore();
        if (!userStore.member.userId) {
          const syncRoutes = await userStore.GETUSERINFO();
          syncRoutes.length && router.addRoute(syncRoutes[0]);
          next({ ...to, replace: true });
        } else {
          next();
        }
      }
    } else {
      if (to.path === loginPath) next();
      else {
        if (whiteListPath.includes(to.path)) {
          next();
        } else next(loginPath);
      }
    }
  });

  router.afterEach((to) => {
    to.meta &&
      setTitle(to.meta.title ? `${to.meta.title} · ${appTitle}` : appTitle);
  });
};
