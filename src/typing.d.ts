// 全局变量
export {}
import type { IconType } from '@ant-design/icons-vue';

declare module 'vue' {
  interface ComponentCustomProperties {
    $icons: IconType
  }
}