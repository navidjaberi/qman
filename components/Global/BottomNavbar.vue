<template>
  <div class="flex bg-main-blue-900 fixed bottom-[0px] w-full text-white">
    <NuxtLink
      :to="item.link"
      v-for="(item, index) in items"
      :key="item.id"
      class="dark:text-gray-300 text-light-primary basis-1/4 text-center !p-2"
      :class="{ '!border-t-4 border-solid border-blue-500': route.path === item.link }"
    >
      <div :class="{ '!text-blue-500': route.path === item.link }">
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
const items = ref<Items[]>([
  { title: "صفحه اصلی", id: 1, link: "/home", icon: "solar:home-angle-linear" },
  { title: "قالب ها", id: 2, link: "/", icon: "fluent:calendar-template-20-regular" },
  { title: "ثبت سفارش", id: 3, link: "/order", icon: "solar:add-circle-linear" },
  { title: "حساب کاربری", id: 8, link: "/user", icon: "solar:user-broken" },
]);
</script>

<style></style>
