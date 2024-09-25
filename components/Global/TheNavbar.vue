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
        <template #prepend>
          <Icon :name="item.icon" size="1.5rem" class="mr-5" />
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
  icon:string;
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
  { title: "صفحه اصلی", id: 1, link: "/home",icon:'solar:home-angle-linear' },
  { title: "قالب ها", id: 2, link: "/design-website",icon:'fluent:calendar-template-20-regular' },
  { title: "ثبت سفارش", id: 3, link: "/seo-form",icon:'solar:add-circle-linear' },
  { title: "وبلاگ", id: 8, link: "/projects",icon:'solar:book-minimalistic-outline' },
  { title: "پشتیبانی", id: 7, link: "/contact" ,icon:'streamline:interface-help-customer-support-1-customer-headset-help-microphone-phone-support'},
  { title: "درباره ما", id: 5, link: "/about-us" ,icon:'ph:users-three'},
]);
</script>

<style></style>
