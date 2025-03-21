import { defineConfig } from 'vitepress'
import { set_sidebar } from "../.vitepress/utils/auto-sidebar";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/toffee-docs/',
  // 标题
  head: [["link", { rel: "icon", href: "/toffee-docs/texture.png" }]],

  // 文档标题
  title: "太妃糖的文档项目",

  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: '目录',
    outline: [2, 6],
    logo: '/texture.png',
    // https://vitepress.dev/reference/default-theme-config
    // 顶部导航栏
    nav: [
      {
        text: "前端",
        items: [
          { text: "React", link: "/docs/front-end/react" },
          { text: "Vue2", link: "/docs/front-end/vue2" }
        ],
      },
      {
        text: "计算机基础",
        items: [
          { text: "计算机网络", link: "/docs/computer-basic/computer-network" },
          { text: "操作系统", link: "/docs/computer-basic/operating-system" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "Git", link: "/docs/tools/git" },
          { text: "常用技术官方文档", link: "/docs/tools/docs-link" },
          { text: "常用图标", link: "/docs/tools/icons" },
          { text: "小知识", link: "/docs/tools/tips" },
        ],
      },
    ],
 
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示

    // 图标导航
    socialLinks: [
      { icon: 'github', link: 'https://github.com/he1senwell' }
    ],

    // 底部配置
    footer: {
      copyright: "Copyright@ 2025 Toffee Zeng",
    },

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
      },
    },
  },
  },

})
