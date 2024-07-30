import { NuxtLoadingIndicator } from './.nuxt/components.d';
import vuetify from "vite-plugin-vuetify";
const title = "Rayanik";
const shortTitle = "Rayanik";
const description = "Services App";
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],

  typescript: {
    shim: false,
    strict: true,
    tsConfig: {
      compilerOptions: {
        lib: ["es6", "dom", "es2017"],
      },
    },
  },

  nitro:{
prerender:{
  routes:['/','design-website','contact-us','projects']
}
  },

  build: { transpile: ["vuetify"] },
  ssr: false,

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "http://192.168.100.23:2030/swagger/index.html",
    },
  },

  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins ||= [];
        config.plugins.push(vuetify());
        config.plugins.push();
      });
    },
    "@pinia/nuxt",
    'nuxt-svgo',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'

    
  ],

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark'
},

  svgo: {
    autoImportPath: './assets/svg/',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // pwa: {
  //   icon: {
  //     source: "~/assets/img/icon/logoRayanik.png",
  //     fileName: "logoRayanik.png",
  //     sizes: [144, 152, 192],
  //     purpose: "maskable",
  //     splash: {
  //       backgroundColor: "white",
  //     },
  //   },
  //   meta: {
  //     name: shortTitle,
  //     author: "Navid jaberi",
  //     theme_color: "white",
  //     description: description,
  //     mobileAppIOS: true,
  //   },
  //   manifest: {
  //     name: shortTitle,
  //     short_name: shortTitle,
  //     theme_color: "white",
  //     description: description,
  //     background_color: "white",
  //   },
  // },
  app: {
    head: {
      title: "Rayanik",
      titleTemplate: "Rayanik",
      
      link: [
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        
        // { rel: "canonical", href: url },
      ],
      
      htmlAttrs: { dir: "rtl", lang: "fa" },
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
        { property: "og:site_name", content: title },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          // content: url,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          // content: image,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        {
          hid: "og:image",
          property: "og:image",
          // content: image,
        },
      ],
    },
  },

  plugins: ["~/plugins/vuetify.ts", "~/plugins/loading.ts"]
});
