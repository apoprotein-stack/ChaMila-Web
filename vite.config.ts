import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// =============================================================================
// Manus 调试收集器逻辑 (保留您的原功能)
// =============================================================================

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024;

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function writeToLogFile(source: string, entries: unknown[]) {
  if (entries.length === 0) return;
  ensureLogDir();
  const logPath = path.join(LOG_DIR, `${source}.log`);
  const lines = entries.map((entry) => `[${new Date().toISOString()}] ${JSON.stringify(entry)}`);
  fs.appendFileSync(logPath, `${lines.join("\n")}\n`, "utf-8");
}

function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",
    transformIndexHtml(html) {
      if (process.env.NODE_ENV === "production") return html;
      return {
        html,
        tags: [{ tag: "script", attrs: { src: "/__manus__/debug-collector.js", defer: true }, injectTo: "head" }],
      };
    },
    configureServer(server: ViteDevServer) {
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") return next();
        let body = "";
        req.on("data", (chunk) => { body += chunk.toString(); });
        req.on("end", () => {
          try {
            const payload = JSON.parse(body);
            if (payload.consoleLogs?.length > 0) writeToLogFile("browserConsole", payload.consoleLogs);
            if (payload.networkRequests?.length > 0) writeToLogFile("networkRequests", payload.networkRequests);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: true }));
          } catch (e) {
            res.writeHead(400);
            res.end();
          }
        });
      });
    },
  };
}

// =============================================================================
// 主配置區 (解決 GitHub Pages 404 的關鍵)
// =============================================================================

const plugins = [
  react(),
  tailwindcss(),
  jsxLocPlugin(),
  vitePluginManusRuntime(),
  vitePluginManusDebugCollector()
];

export default defineConfig（{
  plugins,
  // 1. 修正路徑關鍵：必須與您的 GitHub 倉庫名稱一致
  base: '/ChaMila-Web/', 
  
  resolve: {
    alias: {
      "@": path.resolve(PROJECT_ROOT, "client", "src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
      "@assets": path.resolve(PROJECT_ROOT, "attached_assets"),
    },
  },
  envDir: path.resolve(PROJECT_ROOT),
  root: path.resolve(PROJECT_ROOT, "client"),
  build: {
    // 2. 產出路徑設定：請記住這個路徑，稍後要改 deploy.yml
    outDir: path.resolve(PROJECT_ROOT, "dist"), 
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: true,
    allowedHosts: [".manuspre.computer", ".manus.computer", "localhost"],
  },
});
