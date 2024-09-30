<template>
  <div class="min-h-screen max-w-[900px] mx-auto">
    <div class="px-5">
      <h1 class="font-bold text-[24px]">تیکت های من</h1>
      <div class="px-2 max-w-[500px] mx-auto">
        <BaseButtonFill
          mode="primary"
          text="ثبت تیکت جدید"
          class="mt-5 py-10 !font-black !text-[22px]"
          btn-block
          rounded="xl"
          @click-handler="$router.push('/user/record-ticket')"
        />
      </div>
    </div>
    <div class="px-2 my-6">
      <v-card elevation class="pa-4 !border-2 !border-gray-400 border-solid">
        <div>
          <div class="flex justify-between font-semibold">
            <p>کافه اصغری</p>
            <p>65412621656</p>
            <v-chip color="success">پاسخ داده شده</v-chip>
          </div>
          <div class="flex justify-between font-semibold mt-4">
            <p>تاریخ: 1403/05/31</p>
            <p>ساعت: 14:52</p>
          </div>
          <div class="flex justify-between mt-12">
            <v-btn color="#FFE762" class="!text-[16px] !font-semibold px-10">مالی</v-btn>
            <v-btn
              :prepend-icon="ticketActive ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              size="medium"
              class="!text-[13px] !text-gray-600"
              variant="text"
              @click="ticketActive = !ticketActive"
              >مشاهده کامل تیکت</v-btn
            >
          </div>
          <div v-if="ticketActive">
            <div class="mt-7">
              <p class="mb-2">توضیحات:</p>
              <v-textarea rows="12" v-model="textArea"> </v-textarea>
            </div>
            <div class=" text-center max-w-[400px] mx-auto">
              <v-img src="/img/screen.jpg" cover></v-img>
              <p class="font-bold mt-5">فایل بارگذاری شده توسط شما</p>
              <v-btn color="#FF4869" class="!text-[15px] !font-bold mt-10">حذف تیکت</v-btn>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup>
const textArea = ref(
  'سلام. من چندین بار سعی کردم پرداخت خودم رو برای سفارش #12345 انجام بدم، اما هر بار بعد از وارد کردن اطلاعات کارت، با خطای "پرداخت ناموفق بود" مواجه می‌شم. کارت من معتبره و موجودی کافی داره. لطفاً کمک کنید تا این مشکل رو برطرف کنم، چون نیاز دارم سفارشم رو هر چه سریع‌تر دریافت کنم.'
);
const ticketActive = ref(false);
</script>

<style></style>
