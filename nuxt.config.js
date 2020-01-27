
export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Betty',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,600,700' },
      { rel: 'stylesheet', href: 'https://www.superbet.ro/static/css/app.27f1eca1b4e8caf2d5a49c42bed6c4f1.css' },
      { rel: 'stylesheet', href: 'https://dev.score-alarm.eu/sdk/axilis/static/css/sa-statistics-sdk-styles.css' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#e42313' },

  /*
  ** Generate main file.
  */
  generate: {
    routes: ['/']
  },

  /*
  ** Global CSS
  */
  css: [
    // '@/assets/scss/app.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components.js'
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/router',
    '@nuxtjs/font-awesome',
    '@nuxtjs/moment'
  ],

  /*
  ** Toast config
  */
  toast: {
    // See https://github.com/shakee93/vue-toasted#options
    duration: 2000,
    iconPack: 'fontawesome',
    icon: 'fa-check'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          options: {
            emitWarning: true
          },
          exclude: /(node_modules)/
        })
      }
    }
  }
}
