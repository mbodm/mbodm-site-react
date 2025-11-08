import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // The "server" and "preview" settings fix a Firefox startup delay issue
  server: {
    host: '0.0.0.0'
  },
  preview: {
    host: '0.0.0.0'
  }
})
