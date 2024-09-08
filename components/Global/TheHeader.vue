<template>
  <div>
    <BaseDialog :dialogActive="dialog" @update:dialogActive="dialogActive" mode="auth" />
    <div
      class="!fixed z-50 bg-white md:!bg-transparent h-[72px] mt-4 w-full flex justify-between items-center shadow-sm md:shadow-none"
    >
      <div class="flex items-center">
        <BaseButtonOutline
          prepend="mdi-menu"
          class="mr-4 !text-[13px] pa-2 !flex md:!hidden"
          @clickHandler="drawer = !drawer"
          mode="primary"
        ></BaseButtonOutline>
        <p class="mr-5 text-main-blue-800 text-[18px] font-bold">کیومن</p>
      </div>
      <div class="ml-4">
        <div v-if="!loggedIn">
          <BaseButtonFill
            mode="primary"
            text="ورود یا ثبت نام "
            prepend="mdi-account-outline"
            class="px-4 mx-3 text-[14px] !font-semibold"
            @click-handler="dialog = true"
          />
        </div>
        <div class="flex align-center" v-else>
          <BaseButtonOutline class="pa-3 !mx-3" prepend="mdi-bell-outline" mode="primary">
            <v-badge color="red" content="2"></v-badge>
          </BaseButtonOutline>
          <BaseButtonOutline prepend="mdi-account-outline" class="pa-3" mode="primary" />
          <p class="text-[18px] font-black mx-3">سلام جابری</p>
        </div>
      </div>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      :elevation="5"
      class="!fixed"
      :width="264"
      :rail="rail"
      :permanent="mdAndUp"
    >
      <div>
        <div>
          <div class="bg-gray-50 w-full text-center py-3 mt-8">
            <v-btn
              :icon="drawerIcon"
              @click.stop="md ? (rail = !rail) : (drawer = !drawer)"
              size="medium"
              class="!absolute lg:!hidden -left-3 top-13 text-gray-600 !text-[16px] !border-2 border-gray-600"
            >
            </v-btn>
            <p class="text-main-blue-800 text-[20px] font-black">کیومن</p>
          </div>
          <GlobalTheNavbar direction="vertical" class="my-2 !mt-20 text-black dark:!text-white" />
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
const { md, mdAndUp } = useDisplay();
const rail = ref<null | boolean>(null);
const drawer = ref<null | boolean>(null);
const dialog = ref<boolean>(false);
const store = useAuthentication();
const loggedIn = computed(() => {
  return store.isLoggedInGet;
});
const drawerIcon = computed(() => {
  if (md.value) {
    if (rail.value) {
      return "mdi-chevron-left";
    } else {
      return "mdi-chevron-right";
    }
  } else {
    return "mdi-chevron-right";
  }
});
watch(md, () => {
  if (md.value) {
    drawer.value = true;
    rail.value = true;
  } else {
    drawer.value = false;
    rail.value = null;
  }
});
const dialogActive = (newVal: boolean) => {
  dialog.value = newVal;
};
</script>

<style></style>
