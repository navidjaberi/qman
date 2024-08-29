import { createVuetify } from "vuetify";
import { VTreeview } from 'vuetify/labs/VTreeview'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults,
    display:{
thresholds:{
  xs: 0,
  sm: 340,
  md: 767,
  lg: 1024,
  xl: 1280,
}
    },
    // add theme
    theme: {
      defaultTheme: LIGHT_THEME,

      themes: {
        light,
        dark,
      },
      // add color variations
      //   variations: {
      //     colors: ["primary", "secondary"],
      //     lighten: 3,
      //     darken: 3,
      //   },
    },
components:{
  VTreeview
},

    // Add the custom iconset
    icons: {
      defaultSet: "custom",
      aliases,
      sets: {
        custom,
      },
    },
  });

  app.vueApp.use(vuetify);
});
