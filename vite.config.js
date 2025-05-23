import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
  base: "/CarStore/",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        admin: path.resolve(__dirname, "admin.html"),
      },
    },
  },
});
