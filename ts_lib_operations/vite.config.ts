import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/guide/build.html#library-mode

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ts_lib_operations',
      fileName: 'ts_lib_operations',
    },
  },
  plugins: [dts()],
});