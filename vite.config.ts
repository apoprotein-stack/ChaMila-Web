import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  root: "client",
  server: {
    allowedHosts: ['5173-i1xh1vlxszdx6sd9waw8h-4836cda2.sg1.manus.computer', 'localhost']
  },
  build: {
    outDir: "../dist", 
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "client/index.html"),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
});
