import { defineConfig } from "umi";

const outputPath = "dist/";

const env = process.env.NODE_ENV;
const path = env === "development" ? "http://127.0.0.1:8000/" : outputPath;

export default defineConfig({
  ssr: {
    devServerRender: false
  },
  antd: {
    dark: false,
    compact: true
  },
  locale: {
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: "-"
  },
  dva: {
    immer: true
    // hmr: false,
  },
  nodeModulesTransform: {
    type: "none"
  },
  outputPath: outputPath,
  publicPath: path,
  routes: [{ path: "/", component: "@/pages/index" }]
});
