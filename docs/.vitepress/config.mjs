import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "BrageTools",
  description: "Bragetools docs site",

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/austinbrage' }
    ]
  }
})

function nav() {
  return [
    { 
      text: 'Home', 
      link: '/' 
    },
    {
      text: 'Guide',
      link: '/guide/what-is-brage',
      activeMatch: '/guide/'
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is Brage?', link: 'what-is-brage' },
        { text: 'Getting Started', link: 'getting-started' },
      ]
    },
    {
      text: 'Commands',
      collapsed: false,
      items: [
        { text: 'Create Brage', link: 'create-brage' },
        { text: 'Brage', link: 'brage' },
      ]
    },
    {
      text: 'Examples',
      collapsed: true,
      items: [
        { text: 'Queries', link: 'queries' },
        { text: 'Models', link: 'models' },
        { text: 'Validations', link: 'validations' },
        { text: 'Controllers', link: 'controllers' },
        { text: 'Middlewares', link: 'middlewares' },
        { text: 'Endpoints', link: 'endpoints' },
      ]
    }
  ]
}