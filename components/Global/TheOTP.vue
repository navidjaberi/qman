<template>
  <div>
    <p class="text-[18px] font-semibold text-center mt-5">ورود به کیومن</p>
    <BaseButtonOutline
    mode="primary"
      text="09120570272"
      prepend="mdi-lead-pencil"
      class="px-3 py-1 !rounded-2xl !text-[13px] mx-auto mt-6"
      @click-handler="editPhoneNum"
    />
    <v-form @submit.prevent="confirmCode" class="confirm">
      <div class="text-right px-20 mt-6">
        <p class="mb-3 text-[14px] font-semibold">کد را وارد کنید</p>

        <OTPParent
          :numInputs="4"
          :value="otp"
          inputType="number"
          inputmode="numeric"
          @on-complete="submit"
          @update:value="changes"
          :shouldAutoFocus="true"
          :isDisabled="codeLoading"
          :inputClasses="[codeError ? 'code-error' : '']"
        />

        <p class="text-error text-body-2 mb-4" v-if="codeError">
          کد وارد شده صحیح نیست دوباره تلاش کنید
        </p>
        <div class="text-center">
          <v-btn
            class="mt-10 mb-3 px-5 text-[13px] !font-medium"
            size="medium"
            :disabled="codeLoading"
            v-if="resendCode"
            @click="resendCodeHandler"
            >ارسال مجدد کد</v-btn
          >
          <p v-else class="mt-10 mb-3 px-5 text-[13px] !font-semibold"> {{ timer }}</p>
        </div>
      </div>
      <div class="text-center">
        <BaseButtonFill
          class="px-12 mb-5"
          mode="primary"
          :disabled="otp.length < 4 || codeLoading"
          :loading="codeLoading"
          type="submit"
          text="تایید کد"
          
        />
      </div>
    </v-form>
  </div>
</template>

<script setup>
const emit = defineEmits(["editPhoneNum","confirmOTPCode"]);
const otp = ref("");
const codeLoading = ref(false);
const codeError = ref(false);
const resendCode = ref(false);
const resendCodeSuccessful = ref(false);
const timer = ref("00" + ":" + "59");
const confirmCode = () => {
  emit("confirmOTPCode");
};
const editPhoneNum = () => {
  emit("editPhoneNum");
};
// const submit = (e) => {
//   otp.value = e;
//   confirmCode();
// };
const changes = (e) => {
  otp.value = e;
};
function startTimer() {
  let presentTime = timer.value;
  let timeArray = presentTime.split(/[:]+/);
  let m = timeArray[0];
  let s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  if (m < 0) {
    resendCode.value = true;
    return;
  }
  timer.value = m + ":" + s;
  setTimeout(startTimer, 1000);
}
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  }
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}
onMounted(() => {
  startTimer();
});
</script>

<style></style>
