export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'okayama-univ-fes-2021',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      {
        src: 'js/waveCanvas.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/axios',
      ssr: false
    },
    {
      src: '@/plugins/vue-awesome-swiper',
      ssr: false
    },
    {
      src: '@/plugins/vue-light-timeline',
      ssr: false
    },
    {
      src: '@/plugins/vue-slick',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    'nuxt-microcms-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://www.npmjs.com/package/nuxt-webfontloader
    'nuxt-webfontloader',
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // @nuxtjs/pwa Configuration: https://github.com/nuxt-community/pwa-module
  manifest: {
    name: '岡山大学祭2021',
    lang: 'ja',
    short_name: '岡大祭2021',
    title: '岡山大学祭2021',
    description: '【校友会主催】岡山大学祭2021の公式HPです',
    theme_color: '#0071C5',
    background_color: '#FFFFFF'
  },

  env: {
    API_KEY: process.env.API_KEY
  },

  // Google Font
  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900', 'Noto+Sans+JP:100,300,400,500,700,900']
    }
  },

  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all'
  }
}
