<template>
  <v-list density="compact" nav v-model="currentItem" class="-mr-4">
    <NuxtLink
      :to="item.link"
      v-for="(item, index) in items"
      :key="item.id"
      class="dark:text-gray-300 text-light-primary"
    >
      <v-list-item
        :value="item.title"
        class="border border-gray-300 rounded-lg w-11/12 mb-3 '"
        :height="44"
        
      >
        <template #prepend >
          <v-icon class="mr-6" >mdi-home-city</v-icon>
        </template>
        <template #title>
          <p class="text-[13px] font-semibold">
            {{ item.title }}
          </p>
        </template>
      </v-list-item>
    </NuxtLink>
  </v-list>
</template>
<script setup lang="ts">
interface Items {
  title: string;
  id: number;
  link: string;
}
const route: any = useRoute();
const currentItem = computed(() => {
  if (route.href === "/") {
    return "خانه";
  } else if (route.href === "/design-website") {
    return "طراحی سایت";
  } else if (route.href === "/seo-form") {
    return "مشاوره سئو";
  } else if (route.href === "/contact-us") {
    return "تماس با ما";
  } else if (route.href === "/projects") {
    return "نمونه کارها";
  }
});
const items = ref<Items[]>([
  { title: "صفحه اصلی", id: 1, link: "/" },
  { title: "قالب ها", id: 2, link: "/design-website" },
  { title: "ثبت سفارش", id: 3, link: "/seo-form" },
  { title: "وبلاگ", id: 8, link: "/projects" },
  { title: "پشتیبانی", id: 7, link: "/" },
  { title: "درباره ما", id: 5, link: "/contact-us" },
]);
</script>

<style></style>
