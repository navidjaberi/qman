<template>
  <div class="md:max-2xl:!px-16 px-4">
    <h1 class="text-[20px] font-black">با ما در تماس باشید!</h1>
    <p class="mt-3 font-semibold">
      آیا سؤالی دارید؟ یا می‌خواهید ثبت سفارش کنید؟ ما اینجا هستیم تا به شما کمک کنیم! با ما تماس
      بگیرید و تیم کیومن آماده است تا هرگونه نیاز شما را برآورده کند.
    </p>
    <div>
      <v-card
        class="!bg-gradient-to-r from-[#00A6ED] to-[#1F43FF] py-10 px-16 !text-white mx-auto mt-10"
        width="300"
      >
        <p class="text-center font-semibold text-[17px]">ارتباط سریع و مشاوره رایگان</p>
        <v-form class="mt-4" @submit.prevent="submitData" validate-on="submit">
          <div>
            <p>نام و نام خانوادگی</p>
            <v-text-field-primary required class="mt-2" placeholder="جابر کافه" :rules="text" />
          </div>
          <div>
            <p>شماره تماس</p>
            <v-text-field-primary
              required
              class="mt-2"
              placeholder="0910 0011 101"
              :rules="phone"
            />
          </div>
          <div>
            <BaseButtonFill mode="secondary" text="ثبت اطلاعات" class="mx-auto !py-1" />
          </div>
        </v-form>
      </v-card>
    </div>
    <div class="mt-10">
      <h2 class="font-bold text-[18px] text-center">
        کرج ، عظیمیه، بلوار ۴۵ متری کاج، جنب مدرسه شهید چمران، ساختمان بیمه ایران پلاک ۱۲، واحد ۸
      </h2>
      <div class="w-full md:max-2xl:w-1/3 mx-auto mt-10">
        <v-img src="/img/phone.png" />
        <p class="font-bold text-[18px] text-center my-16">شماره تلفن: ۱۲۱۲ ۱۳۱۲ ۱۲۳</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { text, phone } = useFormRules();
const formRef = ref(null);
const submitData = async () => {
  const { valid } = await formRef.value.validate();
};
</script>

<style></style>
