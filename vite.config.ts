/// <reference types="Vite/client" />

import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import svgr from 'vite-plugin-svgr'
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? "/mscope/" : '/',
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      src: '/src',
      "@": path.resolve(__dirname, "./src"),
    }
  },
  server: {
    host: true,
    // you can replace this port with any port
    port: 5173, // This is the port which we will use in docker
    // add the next lines if you're using windows and hot reload doesn't work
    watch: {
      usePolling: true
    }
  }
})
