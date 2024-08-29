<template>
  <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
    <v-card class="mx-3 px-3 py-5 rounded-xl" width="350px" elevation="20" >
      <div class="flex justify-between align-center px-4">
        <p class="text-[12px] text-gray-500">{{ props.status }}</p>
        <p class="text-[20px] font-black text-accent-800 ">{{ props.title }}</p>
     
      </div>
      <div class="mt-2 px-4">
        <p class="text-[14px] font-semibold text-right rtl">{{ props.text }}</p>
      </div>
    </v-card>
  </v-slide-group-item>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  status: string;
  text: string;
}>();
</script>

<style></style>
