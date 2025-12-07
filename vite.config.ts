import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getComponentTaggerPlugin = (): Plugin | undefined => {
  try {
    const ct = (globalThis as any).componentTagger;
    if (typeof ct === "function") {
      const p = ct();
      if (p && (typeof p.name === "string" || typeof p.apply === "function")) {
        return p as Plugin;
      }
    }
  } catch {
    // silently ignore if componentTagger is unavailable
  }
  return undefined;
};

export default defineConfig(({ mode }: { mode: string }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" ? getComponentTaggerPlugin() : undefined,
  ].filter(Boolean) as Plugin[],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
