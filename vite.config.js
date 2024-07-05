import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite'
import {BootstrapVueNextResolver} from 'bootstrap-vue-next'


export default defineConfig({
  plugins: [vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// import path from 'path';
// import Components from 'unplugin-vue-components/vite'
// import {BootstrapVueNextResolver} from 'bootstrap-vue-next'


// export default defineConfig({
//   plugins: [vue(),
//     Components({
//       resolvers: [BootstrapVueNextResolver()],
//     }),
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// });