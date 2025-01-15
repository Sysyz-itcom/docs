import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/docs/",
  head: [["link", { rel: "icon", href: "https://sysyz-itcom.github.io/img/folder.png" }]],
  title: "SYSYZ-ITCOM Docs",
  description: "邵阳市第一中学信息技术社团文档中心。提供文档查询、检索服务。您可以在此网站中搜索您所需要的文档。",
  themeConfig: {
    // 深色模式
    darkModeSwitchLabel: '深色模式',

    // Return to top
    returnToTopLabel: "返回顶部",

    // 页脚
    footer: {
      copyright: "Copyright © 2025 邵阳市第一中学信息技术社团"
    },

    // 文章目录
    outlineTitle: "文章目录",
    outline: [2, 6],

    // 搜索框
    search: {
      provider: "local",
      options:{
        translations:{
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索搜索文档"
          },
          modal:{
            noResultsText: "无法找到结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectLabel: "选择",
              navigateUpKey: "↑",
              navigateDownKey: "↓",
              closeKey: "Esc",
              submitKey: "Enter"
            },
          },
        },
      },
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '人工服务', link: '/docs/person-service' },
      { text: '致谢名单', link: '/docs/thanks' }
    ],

    sidebar: [
      {
        text: '基础入门',
        collapsed: false,
        items: [
          { text: '正确认识文件扩展名', link: '/docs/name-files-1' }
        ]
      },

      {
        text: '技术提升',
        collapsed: false,
        items: [
          { text: '使用 ADB 激活应用', link: '/docs/use-adb-2' },
          { text: '使用 Ollama 运行本地大模型', link: '/docs/use-ollama-3' },
          { text: 'Git 说明文档', link: 'https://eman.beebox.cc/puba/XcniVbYCr' },
        ]
      },

      {
        text: '社团服务',
        collapsed: false,
        items: [
          { text: '统一验证服务', link: '/docs/club/trunstile' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sysyz-itcom-club' }
    ]
  }
})
