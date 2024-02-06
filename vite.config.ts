import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    federation({
      name: 'core-app',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './Button': './src/components/Button',
      },
      shared: ['react', 'react-dom', 'zustand']
    })
  ], 
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext'
    }
  },
  build: {
    target: 'esnext'
  },
  server: {
    port: 4002,
  }
})
