import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";

import path from 'path';

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 80,
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
      avif: {
        quality: 60,
      },
      jpeg: {
        quality: 80,
      },
      svg: {
      }
    })
  ],
  server: {
    port: 8080,
    hot: true
  }
}