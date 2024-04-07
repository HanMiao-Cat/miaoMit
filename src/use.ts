import { nextTick, type App } from 'vue';
import { createPinia } from 'pinia';
import { Button, Menu } from 'ant-design-vue';
import * as Icons from '@ant-design/icons-vue';
import router from './router/index';

export default (app: App<Element>) => {
  app.use(router).use(createPinia()).use(Button).use(Menu);
  nextTick(() => {
    app.config.globalProperties.$icons = Icons;
    // 全局组册图标组件
    Object.keys(Icons).forEach((key) => {
      app.component(key, Icons[key as keyof typeof Icons]);
    });
  });
};
