import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  base: "/CarStore/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        admin: resolve(__dirname, "admin/index.html"),
        es: resolve(__dirname, "es/index.html"),
        ru: resolve(__dirname, "ru/index.html"),
      },
    },
  },
});
