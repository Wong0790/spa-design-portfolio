import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@icons": "/src/components/icons",
      "@sections": "/src/components/sections",
      "@data": "/src/data",
    },
  },
});
