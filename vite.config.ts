import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  
  // 1. 確保子目錄路徑正確，這決定了圖片是否能顯示
  base: '/ChaMila-Web/', 

  // 2. 指向原始碼所在目錄 (您的檔案都在 client 裡面)
  root: path.resolve(__dirname, "client"),
  
  build: {
    // 3. 產出到 client/dist，這樣上面的 deploy.yml 才抓得到東西
    outDir: "../dist", 
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
});
