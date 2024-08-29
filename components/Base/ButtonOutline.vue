<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-btn
        :block="btnBlock"
        :type="type"
        size="sm"
        class="cursor-pointer !flex mx-auto"
        :class="[externalProps.class, mode === 'primary' ? 'blue' : '' , mode === 'secondary' ? 'orange' : '']"
        @click.stop="btnHandler()"
      >
        {{ text }}

        <template #prepend v-if="prepend">
          <v-icon class="text-gradient">{{ prepend }}</v-icon>
        </template>
        <template #append v-if="append">
          <v-icon class="text-gradient">{{ append }}</v-icon>
        </template>
        <slot />
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
  size?: string | number;
  prepend?: string;
  append?: string;
  mode: "primary" | "secondary";
}>();
const emit = defineEmits(["clickHandler"]);
const btnHandler = () => {
  emit("clickHandler");
};
</script>
<style>
.blue {
  background: linear-gradient(to right, white, white),
    linear-gradient(87deg, rgba(0, 166, 237, 1) 0%, rgba(31, 67, 255, 1) 100%);
  color: rgb(5, 105, 237);
  border: 1px solid transparent;
  border-radius: 8px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-color: transparent;
}
.orange {
  background: linear-gradient(to right, white, white),
    linear-gradient(87deg, rgba(244, 98, 66,1) 0%, rgba(255, 170, 0 , 1) 100%);
  color: rgb(241, 97, 19);
  border: 1px solid transparent;
  border-radius: 8px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-color: transparent;
}
</style>
