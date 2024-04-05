<template>
  <div>home</div>
  <RouterLink to="/login">to login</RouterLink>
  <input v-model="count" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<style lang="less" scoped></style>
