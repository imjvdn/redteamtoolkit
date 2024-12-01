import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/redteamtoolkit/',
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  }
})
