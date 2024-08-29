<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-btn
        :block="btnBlock"
        :type="type"
        :class="[
          externalProps.class,
          $props.mode === 'primary'
            ? 'from-[#00A6ED] to-[#1F43FF] hover:from-main-blue-300 hover:to-main-blue-300 focus:from-main-blue-800 focus:to-main-blue-800'
            : 'from-[#F46242] to-[#FFA800] hover:from-accent-700 hover:to-accent-700 focus:from-accent-900  focus:to-accent-900',
        ]"
        size="sm"
        class="cursor-pointer px-2 py-2 !bg-gradient-to-r text-white hover:!text-black focus:!text-white"
        @click="btnHandler()"
        :loading="loading"
        :disabled="disabled"
      >
        {{ text }}

        <template #prepend v-if="prepend">
          <v-icon class="ml-1"> {{ prepend }}</v-icon>
        </template>
        <template #append v-if="append">
          <v-icon class="mr-1"> {{ append }}</v-icon>
        </template>
      </v-btn>
    </template>
  </v-hover>
</template>
<script setup lang="ts">
const externalProps = defineProps<{
  text?: string;
  btnBlock?: boolean;
  type?: string;
  class?: string;
  mode: "primary" | "secondary";
  size?: string | number;
  append?: string;
  prepend?:string;
  loading?: boolean;
  disabled?: boolean;
}>();
const emit = defineEmits(["clickHandler"]);
const btnHandler = () => {
  emit("clickHandler");
};
</script>
