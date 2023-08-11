import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { env } from 'process'

const idDev = env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    devSourcemap:true,
    modules:{
      generateScopedName: idDev ? '[name]_[local]__[hash:base64:5]' : '[hash:base64:4]'
    }
  },
  resolve: {
    // alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    alias: {'@': path.resolve(__dirname, './src')}
  }
})
