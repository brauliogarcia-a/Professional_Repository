import { resolve } from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: 'src/',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        pokemonList: resolve(__dirname, 'src/pokemon-list/index.html'),
        pokemonDetails: resolve(__dirname, 'src/pokemon-details/index.html'),
        favorites: resolve(__dirname, 'src/favorites/index.html')
      }
    }
  }
});
