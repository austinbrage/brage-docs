import { defineConfig } from 'vitepress'

export const es = defineConfig({

    lang: 'es-EN',
    title: "BrageTools",
    description: "Documentación oficial para el software Bragetools.",

    head: [
        ['link', { rel: "icon", type: 'image/png', href: "/brain-gear.png"}],
    ],

    themeConfig: {
        logo: { src: '/brain-gear.png', width: 24, height: 24 },
    
        nav: nav(),
    
        sidebar: {
            '/es/guide/': { base: '/es/guide/', items: sidebarGuide() }
        },
    
        socialLinks: [
            { icon: 'discord', link: 'https://discord.gg/4bRR5BpS' },
            { icon: 'github', link: 'https://github.com/austinbrage/brage' }
        ],
    
        footer: {
            message: 'Publicado bajo una licencia de uso personal.',
            copyright: `Derechos reservados © 2024-${new Date().getFullYear()} Austin Brage`
        },

        docFooter: {
            prev: 'Anterior',
            next: 'Siguiente'
        },
    
        outline: {
            label: 'En esta página'
        },
        
        langMenuLabel: 'Cambiar Idioma',
        returnToTopLabel: 'Volver arriba',
        sidebarMenuLabel: 'Menu Lateral',
        darkModeSwitchLabel: 'Tema Oscuro',
        lightModeSwitchTitle: 'Cambiar a modo claro',
        darkModeSwitchTitle: 'Cambiar a modo oscuro',
        skipToContentLabel: 'Saltar al contenido'
    }
})

function nav() {
    return [
        { 
            text: 'Inicio', 
            link: '/es' 
        },
        {
            text: 'Guia',
            link: '/es/guide/what-is-brage',
            activeMatch: '/es/guide/'
        }
    ]
}

function sidebarGuide() {
    return [
        {
            text: 'Introducción',
            collapsed: false,
            items: [
                { text: '¿Qué es Brage?', link: 'what-is-brage' },
                { text: 'Inicio rápido', link: 'getting-started' },
            ]
        },
        {
            text: 'Comandos',
            collapsed: false,
            items: [
                { text: 'Crear Brage', link: 'create-brage' },
                { text: 'Brage', link: 'brage' },
            ]
        },
        {
            text: 'Ejemplos',
            collapsed: true,
            items: [
                { text: 'Consultas', link: 'queries' },
                { text: 'Modelos', link: 'models' },
                { text: 'Validaciones', link: 'validations' },
                { text: 'Controladores', link: 'controllers' },
                { text: 'intermediarios', link: 'middlewares' },
                { text: 'Endpoints', link: 'endpoints' },
            ]
        }
    ]
}