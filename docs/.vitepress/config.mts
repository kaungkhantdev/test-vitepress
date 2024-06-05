import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Document",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/image/favicon.ico' }]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Guid',
        items: [
          { 
            text: 'Hi', 
            items: [ { text: 'hi child',  link: '/guide/hi' }]
          },
        ]
      },
      {
        text: 'Section Title A',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Team',
        items: [
          { text: 'Members', link: '/team' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © Hi You'
    },
  },
  
})
