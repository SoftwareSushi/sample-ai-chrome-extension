import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: "manifest.json", dest: "." }],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        popup: "index.html",
        "service-worker": "service-worker.js",
        "content-script": "content-script.js",
      },
      output: {
        entryFileNames: "[name]/[name].js",
        chunkFileNames: "[name]/[name].js",
        assetFileNames: "[name]/[name].[ext]",
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  root: ".",
});
