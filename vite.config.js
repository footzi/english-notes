import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { manifest } from './manifest.js';

export default defineConfig({
  plugins: [react(), VitePWA({ injectRegister: 'inline', manifest })],
});
