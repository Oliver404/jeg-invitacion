import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/jeg-invitacion/',
  build: {
    outDir: 'docs'
  }
})