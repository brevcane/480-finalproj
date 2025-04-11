import { defineConfig } from 'vite';

export default defineConfig({
  base: '/locar-vite-project/',  // Set the base path for GitHub Pages
  build: {
    outDir: 'dist',  // Set the build output directory to 'dist'
  },
});
