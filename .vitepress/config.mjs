import { defineConfig } from 'vitepress'
import { en } from './configs/en.mjs'
import { es } from './configs/es.mjs'

export default defineConfig({

  locales: {
    root: { label: 'English', ...en },
    es: { label: 'Español', ...es }
  }

})