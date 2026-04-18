export default defineConfig({
  plugins, // 延用您之前的 plugins 變數
  
  // 1. 確保子目錄路徑正確
  base: '/ChaMila-Web/', 

  // 2. 指向原始碼所在目錄
  root: path.resolve(PROJECT_ROOT, "client"),
  
  build: {
    // 3. 產出到 client/dist，這樣 deploy.yml 才抓得到
    outDir: path.resolve(PROJECT_ROOT, "client/dist"), 
    emptyOutDir: true,
    rollupOptions: {
      // 4. 強制指定入口檔案位置
      input: path.resolve(PROJECT_ROOT, "client/index.html"),
    },
  },
  // ... 其他 resolve, server 配置保持不變
});
