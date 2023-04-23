/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
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
