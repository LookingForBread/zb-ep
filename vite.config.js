import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import { defineConfig } from 'vite'
import path from 'path'

const inject = require('@rollup/plugin-inject')
export default defineConfig({
  base: './',
  build: {
    outDir: './dist',
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'ZbEp',
      // the proper extensions will be added
      fileName: 'zb-ep'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    commonjs(),
    vue(),
    inject({
      'window.Quill': 'quill/dist/quill.js',
      Quill: 'quill/dist/quill.js',
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '_c': path.resolve(__dirname, 'src/components')
    }
  },
  server: {
    host: '0.0.0.0',
    // https: true,
    proxy: {
      '/api': {
        // target: 'http://39.100.74.100:8063/',
        target: 'http://192.168.101.181:8083/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
