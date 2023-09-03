import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: 'myblog',
  title: "My Awesome Project",
  description: "一个小小的描述",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '示例', link: '/markdown-examples' },
      { text: '教案', link: '/docs/'}
    ],

    sidebar: {
      '/markdown-examples/':
      [
        {
          text: 'Examples',
          items: 
          [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
        {
          text: 'Test',
          items:[
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/docs/Safety themed/test.md' }
          ]
        }
      ],
      '/docs/': [
        {
          text: 'Test',
          items:[
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/docs/Safety themed/test.md' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
