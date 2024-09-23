<template>
  <div class="min-h-screen max-w-[900px] mx-auto">
    <div class="px-5">
      <h1 class="font-bold text-[24px]">ثبت سفارش</h1>
      <v-form class="px-6">
        <div class="lg:flex md:flex xl:flex 2xl:flex justify-center align-center gap-5 mt-5">
          <div class="basis-1/2">
            <p>نام مجموعه شما</p>
            <v-text-field-primary required class="mt-2" placeholder="جابر کافه" />
          </div>
          <div class="basis-1/2">
            <p>شماره تماس</p>
            <v-text-field-primary required class="mt-2" placeholder="0910 0011 101" />
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto">
          <div>
            <p>قالب شما</p>
            <v-select-primary
              :items="['قالب ۷', 'قالب ۶', 'قالب ۵', ' قالب ۴', 'قالب ۳', 'قالب ۲', 'قالب ۱']"
              placeholder="انتخاب"
              class="mt-2"
            ></v-select-primary>
            <p>رنگ انتخابی</p>
            <v-select-primary
              :items="['آبی', 'زرد', 'مشکی', 'طلایی']"
              placeholder="انتخاب"
              class="mt-2"
            ></v-select-primary>
            <p>بسته انتخابی شما</p>
            <v-select-primary
              :items="[
                'یک ماهه رایگان (محدود)',
                'یک ماهه رایگان (محدود)',
                'یک ماهه رایگان (محدود)',
                'یک ماهه رایگان (محدود)',
              ]"
              placeholder="انتخاب"
              class="mt-2"
            ></v-select-primary>
          </div>
        </div>
        <div class="mt-20">
          <p class="text-gray-600 ">نکاتی که باید به آن توجه داشته باشید :</p>
          <div class="flex align-center gap-2 mt-2">
            <div class="!size-2 bg-black rounded-full"></div>
            <p>تغییر قالب و رنگ ها در هر زمان امکان پذیر است.</p>
          </div>

          <div class="flex align-center gap-2 mt-2">
            <div class="!size-2 bg-black rounded-full"></div>
            <p>لطفا در تایید و نوشتن اطلاعات دقت فرمائید.</p>
          </div>
        </div>
        <div class="mt-4 mb-10 text-center flex gap-3 w-full justify-center">
          <BaseButtonFill mode="primary" text="پرداخت" class="px-10 !font-bold"/>
          <BaseButtonFill mode="secondary" text="ویرایش" class="px-10 !font-bold"/>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
