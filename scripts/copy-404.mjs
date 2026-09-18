// Copies dist/index.html to dist/404.html after build.
// GitHub Pages serves 404.html for unknown URLs, which lets
// React Router handle pages like /results on a direct visit.
import { copyFileSync, existsSync } from 'fs';

if (existsSync('dist/index.html')) {
  copyFileSync('dist/index.html', 'dist/404.html');
  console.log('✓ Created dist/404.html (SPA fallback for GitHub Pages)');
} else {
  console.error('dist/index.html not found — run "vite build" first.');
  process.exit(1);
}