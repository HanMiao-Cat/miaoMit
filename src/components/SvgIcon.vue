<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    name: string;
    prefix?: string;
    color?: string;
    width?: string;
    height?: string;
  }>(),
  {
    prefix: 'icon',
    color: '#ccc',
    width: '120px',
    height: '120px'
  }
);

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style lang="less" scoped>
.svg-icon {
  width: v-bind(width);
  height: v-bind(height);
  color: v-bind(color);
}
</style>
