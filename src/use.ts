import type { App } from 'vue';
import { createPinia } from 'pinia';
import { Button } from 'ant-design-vue';
import router from './router/index';

export default (app: App<Element>) => {
  app.use(router).use(createPinia()).use(Button);
};
