<template>
  <a-button type="primary" :loading="loading" @click="handleLogin()"
    >登录</a-button
  >
  <SvgIcon name="403" />
</template>

<script setup lang="ts">
import storage from 'store';
import { useRouter } from 'vue-router';
import { notification } from 'ant-design-vue';
import { LoginApi } from '@/service/index';
import { useLoading } from '@/hooks/index';
import SvgIcon from '@/components/SvgIcon.vue';

const router = useRouter();

const { loading, showLoading, hideLoading } = useLoading();

const handleLogin = async () => {
  try {
    showLoading();
    const result = await LoginApi();
    storage.set('token', result);
    notification.success({
      message: `登录成功`,
      description: '欢迎回来 · 快乐星球'
    });
    router.replace({ path: '/home' });
  } finally {
    hideLoading();
  }
};
</script>

<style lang="less" scoped></style>
