import { defineConfig } from "vite";
import mp from "vite-plugin-multi-page";

export default defineConfig({
  base: "/CarStore/",
  plugins: [mp()],
});
