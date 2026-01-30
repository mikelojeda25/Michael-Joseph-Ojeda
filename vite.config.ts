import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer"; // 1. Idagdag itong import

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      // 2. Idagdag itong plugin configuration
      open: true,
      filename: "bundle-stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
