export default defineNuxtConfig({
  runtimeConfig: {
    app: {
      baseURL: '/',
      cdnURL: process.env.CDN_URL,
    },
    public: {
      version: '0.1.3',
      cartUrl: process.env.CART_PAGE_URL,
    },
  },
  pages: true,
  app: {
    head: {
      title: 'Detalytics',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1, user-scalable=0' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600&display=swap' },
      ],
    },
  },
  css: [
    '@/assets/less/app.less',
  ],
  modules: [
    '@nuxtjs/i18n',
  ],
  webpack: {
    extractCSS: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "@/assets/less/vars.less";',
        },
      },
    },
  },
  // *not support .js file
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang/',
    strategy: 'prefix_except_default',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },
});
