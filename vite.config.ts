import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};

export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8888,
    proxy: {
      '/proxy': {
        target: 'http://meixi.wubangtu.xyz/api',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/proxy/, '')
      }
    }
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [pathResolve('./src/assets/svgs')],
      symbolId: 'icon-[dir]-[name]'
    })
  ]
});
