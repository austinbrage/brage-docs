import { defineConfig } from 'vitepress'

export const en = defineConfig({

    lang: 'en-US',
    title: "BrageTools",
    description: "Official documentation for Bragetools software.",

    head: [
        ['link', { rel: "icon", type: 'image/png', href: "/brain-gear.png"}],
    ],

    themeConfig: {
        logo: { src: '/brain-gear.png', width: 24, height: 24 },
    
        nav: nav(),
    
        sidebar: {
            '/guide/': { base: '/guide/', items: sidebarGuide() }
        },
    
        socialLinks: [
            { icon: 'discord', link: 'https://discord.gg/4bRR5BpS' },
            { icon: 'github', link: 'https://github.com/austinbrage/brage' }
        ],
    
        footer: {
            message: 'Released under a Personal use License.',
            copyright: `Copyright © 2024-${new Date().getFullYear()} Austin Brage`
        },
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