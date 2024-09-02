import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      // directives: true,
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/app/styles/element/index.scss" as *;`
        // C:\Users\aleks\Personal_Projects\portfolio-project\src\app\styles\element\index.scss
      },
    },
  },
  // server: {
  //   port: 8080,
  // },
})
