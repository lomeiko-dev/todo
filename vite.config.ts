import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: './setupTests.js'
  },
  resolve: {
    alias: {
      app: "/src/app",
      pages: "/src/pages",
      widgets: "/src/widgets",
      features: "/src/features",
      entities: "/src/entities",
      shared: "/src/shared",
    },
  },
});
