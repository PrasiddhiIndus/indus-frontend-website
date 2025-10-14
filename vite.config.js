import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000,
    host: true,
    // Enable SPA routing for development
    historyApiFallback: true,
  },
  preview: {
    port: 3000,
    host: true,
    // Enable SPA routing for preview
    historyApiFallback: true,
  },
  build: {
    // Ensure proper asset handling for production
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});