import { cloudflare } from '@cloudflare/vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxImportSource: 'hono/jsx/dom',
  },
  plugins: [cloudflare()],
});
