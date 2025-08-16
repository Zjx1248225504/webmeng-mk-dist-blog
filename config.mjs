import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "webmeng-md-blog",
  description: "使用本地node.js MK编辑器 + git + vite MK转html + 热铁盒自动部署",
  // base: '/dist/',
  // build: {
  //   outDir: '../public/docs', // 自定义输出路径（相对或绝对路径）
  // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'gitee', link: 'https://gitee.com/Zjxm/webmeng-mk-blog' }
    ]
  }
})
