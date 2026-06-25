import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/portfolio/',
  build: {
    outDir: 'build',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('posthog')) return 'analytics';
            if (id.includes('react-dom') || id.includes('react-router') || /[\\/]react[\\/]/.test(id)) {
              return 'react-vendor';
            }
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
