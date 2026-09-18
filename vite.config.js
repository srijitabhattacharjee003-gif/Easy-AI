import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// "base" must match the GitHub repository name for GitHub Pages:
// https://<username>.github.io/Easy-AI/
// Production builds get the /Easy-AI/ prefix; local dev stays at localhost:5173/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Easy-AI/' : '/',
  plugins: [react()],
}));