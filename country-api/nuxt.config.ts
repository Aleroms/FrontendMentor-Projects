// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/color-mode", [
    "@nuxtjs/google-fonts",
    {
      families: {
        "Nunito+Sans": [300, 600, 800],
      },
    },
  ], "nuxt-icon", "@vueuse/nuxt", "@nuxt/image"],
});