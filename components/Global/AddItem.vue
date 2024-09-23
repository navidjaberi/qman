<template>
  <div>
    <div>
      <p class="text-[18px] font-semibold text-center mt-5">اضافه کردن گزینه</p>
    </div>
    <v-form ref="formRef" >
      <v-container class="mt-6 rtl">
        <v-row>
          <v-col cols="12 pt-0">
            <p class="px-2 text-[12px] mb-1">نام آیتم موردنظر را وارد نمائید</p>
            <v-text-field-primary required > </v-text-field-primary>
          </v-col>
        </v-row>
        <BaseButtonFill
          mode="primary"
          text="ثبت"
          class="px-5 mb-5 mx-auto text-[14px] !font-semibold !flex"
          type="submit"
        />
      </v-container>
    </v-form>
  </div>
</template>

<script setup>

</script>

<style></style>
