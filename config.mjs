import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "webmeng-md-blog",
  description: "使用本地node.js MK编辑器 + git + vite MK转html + 热铁盒自动部署",
  // base: '/dist/',
  outDir: ".vitepress/dist",
  srcDir: "src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'VitePress 相关',
        items: [
          { text: 'VitePress 快速入门', link: '/VitePress相关/VitePress快速入门.md' },
        ]
      },
      {
        text: 'Markdown 入门',
        items: [
          { text: 'Markdown 入门示例', link: '/Markdown入门/探索 Markdown 的奇妙世界.md' },
        ]
      },
      {
        text: 'Examples',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'gitee', link: 'https://gitee.com/Zjxm/webmeng-mk-blog' }
    ]
  }
})
