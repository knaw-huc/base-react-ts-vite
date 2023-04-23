/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  esbuild: {
    drop: ["console"],
  },

  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          title: "PLACEHOLDER",
        },
      },
    }),
    react(),
  ],
});
