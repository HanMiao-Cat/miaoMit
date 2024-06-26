/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 环境变量
interface ImportMetaEnv {
  readonly VITE_SOME_APP_PROXY: string;
  readonly VITE_SOME_TIME_OUT: number;
  readonly VITE_SOME_BASE_URL: string;
  readonly VITE_SOME_AUTH_KEY: string;
  readonly VITE_SOME_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

