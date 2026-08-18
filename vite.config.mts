import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

// Dev-only: serve the app when visiting the base path without its trailing
// slash ('/portfolio' instead of '/portfolio/'). Vite otherwise shows a
// "did you mean to visit /portfolio/" hint page. We rewrite the request
// internally so the app loads while the address bar keeps '/portfolio'.
// (In production, GitHub Pages already redirects '/portfolio' to '/portfolio/'.)
const serveBaseWithoutSlash = (): Plugin => ({
  name: 'serve-base-without-slash',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/portfolio') {
        req.url = '/portfolio/';
      } else if (req.url?.startsWith('/portfolio?')) {
        req.url = '/portfolio/' + req.url.slice('/portfolio'.length);
      }
      next();
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    serveBaseWithoutSlash(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, './src'),
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
