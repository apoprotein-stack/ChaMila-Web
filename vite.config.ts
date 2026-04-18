name: 部署 Vite 到 Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          # 注意：因為 package-lock.json 在根目錄，現在 cache 可以用了

      - name: Install & Build
        run: |
          # 1. 在根目錄安裝依賴 (因為 package.json 在根目錄)
          npm install --legacy-peer-deps
          # 2. 執行編譯 (Vite 會根據 config 進入 client 抓原始碼)
          npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # 根據您的 config: outDir: "../dist"
          # 這代表成品會從 client 往上一層，也就是回到「根目錄的 dist」
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
