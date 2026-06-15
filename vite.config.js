import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3000,           // fixed port for local dev
    open: true,           // auto-open browser
    proxy: {
      // Avoid CORS issues in dev – forward API calls to your backend
      '/api': {
        target: 'https://quorum-backend-1.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',       // default, but explicit is good
    sourcemap: true,      // helpful for debugging on Render
    rollupOptions: {
      output: {
        manualChunks: {
          // split vendor chunks for better caching
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  },
  define: {
    // Make sure environment variables are replaced at build time
    'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL)
  }
})
