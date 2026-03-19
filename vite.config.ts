import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// GitHub Pages base path support:
// - set VITE_BASE_PATH (e.g. /semavik-tracker/) for deploy
const basePath = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  plugins: [react()],
  base: basePath.endsWith("/") ? basePath : `${basePath}/`,
  build: {
    sourcemap: false,
    target: "es2022"
  }
});

