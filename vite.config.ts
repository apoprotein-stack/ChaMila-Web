import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  
  // 1. 確保子路徑正確，否則 GitHub Pages 會找不到檔案
  base: '/ChaMila-Web/', 

  // 2. 告訴 Vite「大門」在哪裡：指向 client 資料夾
  root: "client",
  
  build: {
    // 3. 告訴 Vite「成品」要放在哪：放在根目錄的 dist
    outDir: "../dist", 
    emptyOutDir: true,
    // 4. 指定入口檔案的路徑
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
