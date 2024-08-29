<template>
  <v-alert class="h-[98px] relative" :color="props.success ? 'success' : 'error'">
    <div class="flex justify-between">
      <div class="flex items-center">
        <v-icon
          color="white"
          class="!absolute opacity-10"
          :class="[
            props.success ? '!text-[12rem] -right-9 -top-10' : '!text-[11rem] -right-7 -bottom-3',
          ]"
          >{{ props.success ? "mdi-check" : "mdi-alert-outline" }}</v-icon
        >

        <div>
          <v-icon
            class="bg-white rounded-full p-1 mx-3 !text-[3rem]"
            :class="[props.success ? ' text-success' : 'text-error']"
            >{{ props.success ? "mdi-check" : "mdi-alert-outline" }}</v-icon
          >
        </div>
        <div>
          <p class="text-[14px] font-light my-1">{{ props.title }}</p>
          <p class="text-[14px] font-normal">{{ props.text }}</p>
        </div>
      </div>
      <div class="flex items-center">
        <v-btn variant="outlined" class="px-6 py-6 !text-[14px] !flex mx-2">مشاهده جزییات</v-btn>
        <v-btn variant="tonal" class="pa-6 !text-[14px] !flex ml-6" icon="mdi-close"></v-btn>
      </div>
    </div>
  </v-alert>
</template>
<script setup lang="ts">
const props = defineProps<{
  success: boolean;
  title: string;
  text: string;
}>();
</script>
