const primary = '#153564'
const accent = '#E6C46A'

export default {
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    GTM_ID: process.env.GTM_ID
  },

  target: 'static',

  buildModules: [
    'nuxt-font-loader',
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/toast',
    '@nuxtjs/gtm',
    ['vue-scrollto/nuxt', { duration: 250 }]
  ],

  plugins: [
    '@/plugins/axios',
    '@/plugins/mixins'
  ],

  css: ['@/assets/sass/app.scss'],

  tailwindcss: { mode: 'jit' },

  gtm: {
    id: process.env.GTM_ID,
    scriptDefer: true,
  },

  router: { middleware: ['errors', 'nav'] },

  axios: { baseURL: process.env.API_URL },

  toast: { duration: 5000, keepOnHover: true },

  fontLoader: { url: '/fonts/fonts.css' },

  sitemap: {
    hostname: '',
    gzip: true,
    i18n: { defaultLocale: 'ar', locales: ['ar', 'en'], routesNameSeparator: '___' }
  },

  i18n: {
    seo: false,
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ar',
    vueI18nLoader: true,
    detectBrowserLanguage: false,
    vueI18n: { fallbackLocale: 'ar' },
    locales: [
      { code: 'ar', name: 'عربي', file: 'ar.js' },
      { code: 'en', name: 'English', file: 'en.js' }
    ]
  },

  loading: { color: primary },

  render: { http2: { push: true } },

  pwa: { manifest: { lang: 'ar', theme_color: primary } },

  generate: { fallback: true },

  build: {
    splitChunks: { layouts: true, pages: true, commons: true },

    extractCSS: true,

    optimizeCSS: true,

    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: { name: 'styles', test: /\.(css|vue)$/, chunks: 'all', enforce: true }
        }
      }
    },

    postcss: {
      preset: {
        features: { "focus-within-pseudo-class": false }
      }
    }
  },

  head: {
    title: 'قافلة الإيمان',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content:  'تمتع برحلة عمرة هادئة مطمئنة '},
      { hid: 'google', name: 'google', content: 'notranslate' }
    ],
    link: [ { rel: 'icon', type: 'image/png', href: '/icon.png' } ]
  }
}
