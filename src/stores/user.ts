import { defineStore } from 'pinia';
import storage from 'store';
import { GetUserInfoApi } from '@/service/index';
import Layout from '@/components/Layout.vue';

export const routeAllPathToCompMap = import.meta.glob(`../pages/**/*.vue`);

interface UserStore {
  member: Record<string, any>;
  rulePermission: string[];
  routerList: any[];
}

export default defineStore('user', {
  state(): UserStore {
    return {
      member: {},
      rulePermission: [],
      routerList: []
    };
  },
  actions: {
    // 登出
    LOGOUT() {
      storage.remove('token');
      this.member = {};
      this.rulePermission = [];
      this.routerList = [];
    },

    // 个人信息
    async GETUSERINFO() {
      const getUserOk = await GetUserInfoApi();
      this.member = getUserOk.userInfo;
      this.rulePermission = getUserOk.rulePermission;
      const syncRouter = this.GENERATEROUTES(getUserOk.routerList);
      this.routerList = syncRouter;
      console.log(this.routerList);
      return syncRouter;
    },

    // 生成动态路由
    GENERATEROUTES(syncRoutes: any[]) {
      const deepGenerateRoutes = (routes: any[]) => {
        return routes.map((item: any) => {
          if (item.component === 'Layout') {
            item.component = Layout;
          } else {
            item.component =
              routeAllPathToCompMap[
                /* @vite-ignore */ `../pages/${item.component}`
              ];
          }
          if (item.children && item.children.length) {
            this.GENERATEROUTES(item.children);
          }
          return item;
        });
      };
      return deepGenerateRoutes(syncRoutes);
    },
  }
});
