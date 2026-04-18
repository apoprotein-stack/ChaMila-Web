// ... 前面的 import 保持不變 ...

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    jsxLocPlugin(),
    vitePluginManusRuntime(),
    vitePluginManusDebugCollector()
  ],
  
  // 1. 修正路徑：確保 GitHub Pages 認得這個子目錄
  base: '/ChaMila-Web/', 

  // 2. 關鍵修正：告訴 Vite 網頁原始碼在 client 資料夾裡
  root: path.resolve(__dirname, "client"),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  build: {
    // 3. 強制產出到根目錄的 dist，方便 GitHub Actions 抓取
    outDir: path.resolve(__dirname, "dist"), 
    emptyOutDir: true,
    // 確保找到 index.html
    rollupOptions: {
      input: path.resolve(__dirname, "client/index.html"),
    },
  },
});
