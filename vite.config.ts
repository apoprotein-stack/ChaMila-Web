export default defineConfig({
  // 1. 確保子目錄路徑正確，否則圖片會破圖
  base: '/ChaMila-Web/', 

  // 2. 告訴 Vite 原始碼在 client 裡
  root: path.resolve(__dirname, "client"),
  
  build: {
    // 3. 成品輸出到 client 內的 dist
    outDir: "dist", 
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
  // ...其餘 plugins 保持不變
});
