<template>
  <v-slide-group
    v-model="model"
    class="ltr mt-5"
    selected-class="bg-primary"
    multiple
    show-arrows
    prev-icon="mdi-chevron-left-circle-outline"
    next-icon="mdi-chevron-right-circle-outline"
  >
    <CardTemplate v-for="n in 15" :key="n" />
  </v-slide-group>
</template>

<script setup>
const model = ref();
const templates = ref([
  {
    name: "fantasy",
    modes: [
      {
        name: "blue",
        imgs: [
          "/templates/fantasy/Blue/Home.png",
          "/templates/fantasy/Blue/Menu.png",
          "/templates/fantasy/Blue/Mini-Site.png",
        ],
        color: "",
      },
      {
        name: "gold",
        imgs: [
          "/templates/fantasy/Gold/Home.png",
          "/templates/fantasy/Gold/Menu.png",
          "/templates/fantasy/Gold/Mini-Site.png",
        ],
        color: "",
      },
      {
        name: "mint",
        imgs: [
          "/templates/fantasy/Mint/Home.png",
          "/templates/fantasy/Mint/Menu.png",
          "/templates/fantasy/Mint/Mini-Site.png",
        ],
        color: "",
      },
      {
        name: "pink",
        imgs: [
          "/templates/fantasy/Pink/Home.png",
          "/templates/fantasy/Pink/Menu.png",
          "/templates/fantasy/Pink/Mini-Site.png",
        ],
        color: "",
      },
      {
        name: "purple",
        imgs: [
          "/templates/fantasy/Purple/Home.png",
          "/templates/fantasy/Purple/Menu.png",
          "/templates/fantasy/Purple/Mini-Site.png",
        ],
        color: "",
      },
    ],
  },
]);
</script>

<style></style>
