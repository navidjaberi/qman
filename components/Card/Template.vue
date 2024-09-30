<template>
  <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
    <v-card class="mx-3">
      <v-img
        src="/img/example-temp.png"
        width="160px"
        height="240px"
        cover
        placeholder="/img/img-placeholder.jpg"
        class="align-end"
      >
        <div class="gradient py-1 mb-2 px-2">
          <p class="text-white text-[12px] font-semibold" v-text="'طرح نویدی'"></p>
        </div>
      </v-img>
    </v-card>
  </v-slide-group-item>
</template>

<script setup></script>

<style>
.gradient {
  background: linear-gradient(0deg, rgba(15, 15, 15, 0.2) 0%, rgba(15, 15, 15, 0.2) 100%);
}
</style>
