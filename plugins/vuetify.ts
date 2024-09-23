import { createVuetify } from "vuetify";
import { VFileInput, VSelect, VTextField, VTextarea, VBtn } from "vuetify/components";
import { VTreeview } from "vuetify/labs/VTreeview";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,

    display: {
      thresholds: {
        xs: 0,
        sm: 340,
        md: 767,
        lg: 1024,
        xl: 1280,
      },
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
    components: {
      VTreeview,
    },

    // Add the custom iconset
    icons: {
      defaultSet: "custom",
      aliases,
      sets: {
        custom,
      },
    },

    locale: {
      locale: "fa",
      fallback: "fa",
      rtl: { fa: true },
    },
    aliases: {
      VTextFieldPrimary: VTextField,
      VSelectPrimary: VSelect,
      VTextareaPrimary: VTextarea,
      VFileInputPrimary: VFileInput,
    },
    defaults: {
      VBtn: {
        style: "display: flex;letter-spacing: 0 ;",
      },
      VTextFieldPrimary: {
        variant: "solo",
        flat: true,
        class: ["text-field-primary"],
        color: "main",
        density: "compact",
      },
      VSelectPrimary: {
        variant: "solo",
        flat: true,
        class: ["text-field-primary"],
        color: "main",
        density: "compact",
      },
      VTextareaPrimary: {
        variant: "solo",
        flat: true,
        class: ["text-field-primary"],
        color: "main",
        density: "compact",
      },
      VFileInputPrimary: {
        variant: "solo",
        flat: true,
        class: ["text-field-primary"],
        color: "main",
        density: "compact",
      },
    },
  });

  app.vueApp.use(vuetify);
});
