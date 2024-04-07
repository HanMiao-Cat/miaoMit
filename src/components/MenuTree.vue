<template>
  <template v-for="item in menuList">
    <a-sub-menu v-if="item.children && item.children.length" :key="item.path">
      <template #icon>
        <component :is="$icons[item.mate?.icon]" />
      </template>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuTree :menuList="item.children"></MenuTree>
    </a-sub-menu>

    <template v-else>
      <a-menu-item v-if="!item.meta.hidden" :key="item.path">
        <template #icon>
          <component :is="$icons[`${item.meta?.icon}`]" />
        </template>
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
    </template>
  </template>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    menuList: any[];
  }>(),
  {
    menuList: () => []
  }
);
</script>
