import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path');

function resolve(dir) {
  //在root/src目录下运行dir
  return path.join(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    '@': resolve('./src'),
    '@v': resolve('./src/views'),
    '@c': resolve('./components'),
    '@u': resolve('./src/utils'),
    '@a': resolve('./src/api')
  },
  server: {
    port: 3001,
    //在项目启动的时候，自动在浏览器中打开应用
    open: true,
    //如果端口被占用，是否尝试其他端口
    strictPort: false,
    //是否使用https
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:30016',
        changeOrigin: true,
        rewrite: (path) => path.replace('^\/api/', '')
      }
    }
  }
})
