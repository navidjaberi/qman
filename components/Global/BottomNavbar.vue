<template>
  <div class="flex bg-main-blue-900 fixed  bottom-[10px] w-full text-white">
    <NuxtLink
      :to="item.link"
      v-for="(item, index) in items"
      :key="item.id"
      class="dark:text-gray-300 text-light-primary basis-1/4 text-center !p-2"
    >
      <div>
        <Icon :name="item.icon" size="1.5rem" />
        <p>{{ item.title }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
interface Items {
  title: string;
  id: number;
  link: string;
  icon: string;
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
  { title: "صفحه اصلی", id: 1, link: "/home", icon: "solar:home-angle-linear" },
  { title: "قالب ها", id: 2, link: "/design-website", icon: "fluent:calendar-template-20-regular" },
  { title: "ثبت سفارش", id: 3, link: "/seo-form", icon: "solar:add-circle-linear" },
  { title: "حساب کاربری", id: 8, link: "/projects", icon: "solar:user-broken" },
  
]);
</script>

<style></style>
