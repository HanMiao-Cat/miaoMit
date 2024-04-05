import { createApp } from 'vue';
import App from './App.vue';
import use from './use';

import 'virtual:svg-icons-register';

const app = createApp(App);
use(app);
app.mount('#app');
