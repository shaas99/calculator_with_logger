import react from '@vitejs/plugin-react-swc'

import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/guide/build.html#library-mode

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'react_lib_comps',
      fileName: 'react_lib_comps',
    },
  },
  plugins: [react(), dts()],
})


