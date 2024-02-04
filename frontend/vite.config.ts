import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3001,
    proxy:{
      "/v1":"http://52.206.124.205:3000/"
    } 
  }
})
