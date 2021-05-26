import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

const path = require('path');

function resolve(dir) {
  //在root/src目录下运行dir
  return path.join(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      styleImport({
        libs: [{
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name) => {
              name = name.slice(3)
              return `element-plus/packages/theme-chalk/src/${name}.scss`;
            },
            resolveComponent: (name) => {
              return `element=plus/lib/${name}`;
            }
          },
          {
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name) => {
              return `element-plus/lib/theme-chalk/${name}.css`;
            },
            resolveComponent: (name) => {
              return `element-plus/lib/${name}`;
            },
          }
        ]
      })
    ],
    resolve: {
      alias: {
        '@': resolve('./src'),
        '@v': resolve('./src/views'),
        '@c': resolve('./components'),
        '@u': resolve('./src/utils'),
        '@a': resolve('./src/api')
      }
    },

    server: {
      port: 8000,
      //在项目启动的时候，自动在浏览器中打开应用
      open: false,
      //如果端口被占用，是否尝试其他端口
      strictPort: false,
      //是否使用https
      https: false,
      host: 'localhost',
      proxy: {
        '/api': {
          target: 'http://localhost:30016',
          changeOrigin: true,
          ws: false,
          // rewrite: (path) => path.replace('^\/api/', '')
        }
      }
    },
  }
});