import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // use './' to ensure relative paths are used for all assets
  plugins: [react()],
});
