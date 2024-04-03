import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@public': path.resolve(__dirname, './public'),
      '@api': path.resolve(__dirname, './src/API'),
      '@config': path.resolve(__dirname, './config.js'),
      '@hooks': path.resolve(__dirname, './src/customHooks')
    }
  }
})
