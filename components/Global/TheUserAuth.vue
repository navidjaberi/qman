<template>
  <div>
    <div>
      <p class="text-[18px] font-semibold text-center mt-5">
        {{ singInDialogActive ? "ورود به کیومن" : "ثبت نام در کیومن" }}
      </p>
      <p class="text-[12px] text-gray-500 text-center mt-5">اطلاعات خود را وارد کنید</p>
    </div>
    <v-form ref="formRef" @submit.prevent="userLogin">
      <v-container class="mt-6 rtl">
        <v-row>
          <v-col cols="12" v-if="!singInDialogActive">
            <p class="px-2 text-[12px] mb-1">نام مجموعه شما</p>
            <v-text-field-primary required  placeholder="جابرکافه">
            </v-text-field-primary>
          </v-col>
          <v-col cols="12 pt-0">
            <p class="px-2 text-[12px] mb-1">شماره تماس</p>
            <v-text-field-primary required  placeholder="10 10 100 0912">
            </v-text-field-primary>
          </v-col>
        </v-row>
        <BaseButtonFill
          mode="primary"
          text="تایید اطلاعات"
          class="px-5 mb-5 mx-auto text-[14px] !font-semibold !flex"
          type="submit"
        />
        <v-btn
          type="button"
          variant="text"
          @click="singInDialogActive = !singInDialogActive"
          color="black"
          size="medium"
          class="text-[12px] !font-black !flex mx-auto my-6 pa-2"
          >{{ singInDialogActive ? "ساخت حساب کاربری" : "ورود به حساب کاربری" }}</v-btn
        >
      </v-container>
    </v-form>
  </div>
</template>

<script setup>
const singInDialogActive = ref(true);
const emit = defineEmits(["signedIn", "signedUp"]);
const userLogin = () => {
  if (singInDialogActive.value) {
    emit("signedIn");
  } else {
    emit("signedUp");
  }
};
</script>

<style></style>
