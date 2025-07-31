import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  // 更改临时文件路径到 node_modules/.bin/.vite 文件夹
  vite: {
    cacheDir: 'node_modules/.bin/.vite',
  }
});
