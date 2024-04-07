<template>
  <a-menu
    mode="inline"
    theme="dark"
    :inline-collapsed="state.collapsed"
    v-model:openKeys="state.openKeys"
    v-model:selectedKeys="state.selectedKeys"
  >
    <MenuTree :menu-list="routerList[0].children" />
  </a-menu>

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import MenuTree from './MenuTree.vue';
import { useUserStore } from '@/stores/index';

const { routerList } = useUserStore();

const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1']
});

watch(
  () => state.openKeys,
  (oldVal) => {
    state.preOpenKeys = oldVal;
  }
);
</script>
