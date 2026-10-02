import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/Blog/" : "/",
  server: {
    port: 5173,
    host: true,
  },
}));
