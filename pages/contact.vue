<template>
  <div class="md:max-2xl:px-20 px-5">
    <div>
      <v-img src="/img/contact.png" width="500" class="mx-auto" />
    </div>
    <div class="mt-5">
      <h1 class="font-bold text-[22px]">درخواست مشاوره به انتخاب شما !</h1>
      <p class="text-gray-600 md:max-2xl:text-[18px] text-[12px] mt-4">
        درصورت نیاز به مشاوره پس از ثبت اطلاعات توسط شما، مشاورین تخصصی کیومن در اسرع وقت باشما تماس
        خواهند گرفت.
      </p>
    </div>
    <div>
      <v-form class="px-12">
        <div class="md:max-2xl:flex justify-center align-center gap-5 mt-5">
          <div class="basis-1/2">
            <p>نام و نام خانوادگی</p>
            <v-text-field-primary required class="mt-2" placeholder="جابر کافه" />
          </div>
          <div class="basis-1/2">
            <p>شماره تماس</p>
            <v-text-field-primary required class="mt-2" placeholder="0910 0011 101" />
          </div>
        </div>

        <div class="w-full md:max-2xl:w-1/2 mx-auto mt-5">
          <div>
            <p>چه زمانی برای مکالمه راحت هستید؟</p>
            <v-select-primary
              :items="['قالب ۷', 'قالب ۶', 'قالب ۵', ' قالب ۴', 'قالب ۳', 'قالب ۲', 'قالب ۱']"
              placeholder="انتخاب"
              class="mt-2"
            ></v-select-primary>
          </div>
        </div>
        <div class="text-center">
          <BaseButtonFill mode="primary" text="تایید اطلاعات" class="mx-auto px-12 mt-4" />
        </div>
      </v-form>
    </div>
    <div class="my-12">
      <h4 class="font-bold text-[22px]">راه های ارتباطی با کیومن</h4>
      <div class="md:max-2xl:flex mt-10">
        <div class="mx-2 w-[150px]">
          <p class="text-[16px]">شماره های تماس :</p>
        </div>
        <div class="font-bold mx-2 text-left">
          <p class="text-[18px]">2412 875 0930</p>
          <p class="text-[18px] mt-4">5005 400 0912</p>
        </div>
      </div>
      <div class="md:max-2xl:flex mt-10">
        <p class="text-[16px] mx-2 w-[150px]">ایمیل:</p>
        <p class="text-[18px] font-bold mx-2 text-left">Qman@gmail.com</p>
      </div>
      <div class="md:max-2xl:flex mt-10">
        <p class="text-[16px] mx-2 w-[150px]">آدرس:</p>
        <p class="text-[18px] font-bold mx-2">
          البرز، کرج، عظیمیه، بلوار 45 متری کاج، جنب هنرستان چمران، ساختمان بیمه ایران، پلاک 12،
          واحد 8
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
