<template>
  <v-list density="compact" class="-mr-4" >
    
      <v-list-item
      :to="item.link" v-for="(item, index) in items" :key="item.id" 
        :value="item.title"
        class="border border-gray-300 rounded-lg w-11/12 mb-3 "
        active-class="!bg-[#E5F8F0]"
        :height="44"
       :active="route.path===item.link"
      >
        <template #prepend>
          <Icon :name="item.icon" size="1.5rem" class="mr-5" />
        </template>
        <template #title>
          <p class="text-[13px] font-semibold">
            {{ item.title }}
          </p>
        </template>
      </v-list-item>

  </v-list>
</template>
<script setup lang="ts">
interface Items {
  title: string;
  id: number;
  link: string;
  icon: string;
}
const route=useRoute()
const items = ref<Items[]>([
  { title: "صفحه اصلی", id: 1, link: "/home", icon: "solar:home-angle-linear" },
  { title: "قالب ها", id: 2, link: "/", icon: "fluent:calendar-template-20-regular" },
  { title: "ثبت سفارش", id: 3, link: "/order", icon: "solar:add-circle-linear" },
  { title: "وبلاگ", id: 8, link: "/", icon: "solar:book-minimalistic-outline" },
  {
    title: "پشتیبانی",
    id: 7,
    link: "/support",
    icon: "streamline:interface-help-customer-support-1-customer-headset-help-microphone-phone-support",
  },
  { title: "درباره ما", id: 5, link: "/about-us", icon: "ph:users-three" },
]);
</script>

<style></style>
