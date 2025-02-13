import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgLoader from 'vite-svg-loader';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgLoader()],
  base: '/dynamicsinfosolution/', // Replace <repository-name> with your GitHub repo name

  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
