import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dynamicsinfosolution/', // Replace <repository-name> with your GitHub repo name

  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
