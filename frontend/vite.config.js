import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  optimizeDeps: {
    include: ['react-icons/fa'], 
  },
  build: {
    rollupOptions: {
      external: ['react-icons/fa'], 
    },
  },
};