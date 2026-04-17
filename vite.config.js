// vite.config.js - 适配新版 vite-plugin-sitemap
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 🔥 修复：新版插件是默认导出，不是解构导出
import sitemapPlugin from 'vite-plugin-sitemap';

// 手动定义网站路由（无JSX，纯JS）
const siteRoutes = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  // 产品页（8个产品ID）
  { path: '/product/1', priority: 0.9, changefreq: 'monthly' },
  { path: '/product/2', priority: 0.9, changefreq: 'monthly' },
  { path: '/product/3', priority: 0.9, changefreq: 'monthly' },
  { path: '/product/4', priority: 0.9, changefreq: 'monthly' },
  { path: '/product/5', priority: 0.9, changefreq: 'monthly' },
  { path: '/product/6', priority: 0.9, changefreq: 'monthly' },
  { path: '/product/7', priority: 0.9, changefreq: 'monthly' },
  { path: '/product/8', priority: 0.9, changefreq: 'monthly' }
];

// 生成Sitemap路由
const generateSitemapRoutes = () => {
  const baseUrl = 'https://honria.com';
  return siteRoutes.map(route => ({
    path: `${baseUrl}${route.path}`,
    lastmod: new Date().toISOString(),
    priority: route.priority,
    changefreq: route.changefreq
  }));
};

export default defineConfig({
  plugins: [
    vue(),
    // 🔥 插件调用方式不变，仅导入语法改了
    sitemapPlugin({
      hostname: 'https://honria.com',
      routes: generateSitemapRoutes(),
      outDir: 'dist',
      filename: 'sitemap.xml'
    })
  ],
  base: '/',
  server: {
    port: 5173,
    open: true
  }
});