<template>
  <div class="lg:max-2xl:mr-[256px]">
    <div class="bg-main-blue-400 md:px-10 py-8 ">
      <div class="text-center py-9 md:hidden">
        <p class="text-[20px] font-bold">کیومن، منو دیجیتال</p>
        <p class="text-[14px] text-white font-semibold rtl mt-4">شماره تماس:۹۱۰۰۵۴۵۳-۰۲۱</p>
      </div>
      <div
        class="flex px-4 flex-wrap md:justify-center lg:justify-center xl:justify-center 2xl:justify-center"
      >
        <div class="basis-1/2 md:max-2xl:basis-1/3 ">
          <p class="font-bold text-[20px]">دسترسی سریع</p>
          <div class="text-white font-medium mt-6">
            <NuxtLink><p class="text-[16px] mt-4">بلاگ</p></NuxtLink>
            <NuxtLink><p class="text-[16px] mt-4">پشتیبانی</p></NuxtLink>
            <NuxtLink><p class="text-[16px] mt-4">درباره ما</p></NuxtLink>
            <NuxtLink><p class="text-[16px] mt-4">تماس با ما</p></NuxtLink>
            <NuxtLink><p class="text-[16px] mt-4">ثبت سفارش</p></NuxtLink>
          </div>
        </div>
        <div class="basis-1/2 md:max-2xl:basis-1/3">
          <p class="font-bold text-[20px]">راهنمای سایت</p>
          <div class="text-white font-medium mt-6">
            <NuxtLink><p class="text-[16px] mt-4">قوانین و مقررات</p></NuxtLink>
            <NuxtLink><p class="text-[16px] mt-4">راهنمای استفاده از سایت</p></NuxtLink>
          </div>
        </div>
        <div class="basis-1/2 my-16 md:!my-0 md:max-2xl:basis-1/3">
          <p class="font-bold text-[20px]">شبکه های اجتماعی</p>
          <div class="text-white font-medium mt-6">
            <NuxtLink
              ><div class="mt-4">
                <span class="ml-1 rounded-full bg-white pa-1"
                  ><v-icon class="text-main-blue-400">mdi-instagram</v-icon></span
                ><span class="text-[16px] mt-4 font-medium">تلگرام</span>
              </div></NuxtLink
            >
            <NuxtLink
              ><div class="mt-4">
                <span class="ml-1 rounded-full bg-white pa-1"
                  ><v-icon class="text-main-blue-400">mdi-instagram</v-icon></span
                ><span class="text-[16px] mt-4 font-medium">لینکدین</span>
              </div></NuxtLink
            >
            <NuxtLink
              ><div class="mt-4">
                <span class="ml-1 rounded-full bg-white pa-1"
                  ><v-icon class="text-main-blue-400">mdi-linkedin</v-icon></span
                ><span class="text-[16px] mt-4 font-medium">اینستاگرام</span>
              </div></NuxtLink
            >
          </div>
        </div>
        <div class="basis-1/2 -mt-20 md:max-2xl:hidden">
          <p class="font-bold text-[20px]">مجوز ها</p>
          <div class="mt-6">
            <div
              class="size-20 bg-white rounded-md shadow-xl mt-4 flex align-center justify-center"
            >
              <v-img src="/img/certificate-1.png" class="size-16" />
            </div>
            <div
              class="size-20 bg-white rounded-md shadow-xl mt-4 flex align-center justify-center"
            >
              <v-img src="/img/certificate-2.png" class="size-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-9 h-40 flex justify-center align-center md:px-10">
      <div class="text-center basis-2/5 hidden md:max-2xl:block ">
        <p class="text-[20px] font-bold">کیومن، منو دیجیتال</p>
        <p class="text-[14px] text-main-blue-800 font-semibold rtl mt-4">شماره تماس:۹۱۰۰۵۴۵۳-۰۲۱</p>
      </div>
      <div>
        <p class="text-[12px] font-semibold text-gray-400 text-center mx-5">
          تمامی حقوق مادی و معنوی این وبسایت متعلق به گروه آموزشی ماز می باشد و هر گونه کپی برداری
          پیگرد قانونی دارد.
        </p>
        <div class="mt-4 flex justify-center basis-1/5">
          <div class="ml-4 rounded-full bg-blue-900 pa-1" v-for="n in 6">
            <v-icon color="white">mdi-linkedin</v-icon>
          </div>
        </div>
      </div>
      <div class="hidden md:max-2xl:block basis-2/5">
        <div class="flex justify-center">
          <div class="size-20 bg-white rounded-md shadow-xl flex align-center justify-center">
            <v-img src="/img/certificate-1.png" class="size-16" />
          </div>
          <div class="size-20 bg-white rounded-md shadow-xl flex align-center justify-center">
            <v-img src="/img/certificate-2.png" class="size-16" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
