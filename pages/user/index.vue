<template>
  <div class="md:max-2xl:!px-16 px-4">
    <div class="flex justify-between align-center">
      <p class="text-[24px] font-bold">رایاکافه کرج</p>
      <p class="text-[14px] font-semibold">شماره اشتراک:۴۵۷۸</p>
    </div>
    <div class="md:px-56">
      <div class="flex justify-around my-12">
        <div>
          <BaseButtonOutline mode="primary" prepend="mdi-comment-outline" class="pa-4 mx-auto" />
          <p class="text-[12px] font-bold mt-2">تیکت پشتیبانی</p>
        </div>

        <div>
          <BaseButtonOutline mode="primary" prepend="mdi-headphones" class="pa-4 mx-auto" />
          <p class="text-[12px] font-bold mt-2">تماس با پشتیبانی</p>
        </div>
        <div>
          <BaseButtonOutline mode="primary" prepend="mdi-comment-quote" class="pa-4 mx-auto" />
          <p class="text-[12px] font-bold mt-2">نظر درباره ما</p>
        </div>
      </div>
      <div class="mx-auto">
        <v-card
          class="!bg-gradient-to-r from-[#00A6ED] to-[#1F43FF] !flex justify-center text-white align-center mx-auto"
          max-width="500"
          height="100"
        >
          <p class="text-[20px] font-black">ویرایش و اضافه کردن اطلاعات منو</p>
        </v-card>
        <v-card
          @click="editInputs"
          class="!bg-gradient-to-r from-[#F46242] to-[#FFA800] !flex text-white justify-center align-center mt-2 mx-auto"
          max-width="500"
          height="100"
          v-if="disableInputs"
        >
          <p class="text-[20px] font-black">ویرایش اطلاعات مجموعه</p>
        </v-card>
      </div>
      <div class="mt-10 text-center">
        <p class="text-[16px] font-semibold">مدت باقیمانده از بسته:</p>
        <p class="text-green-600 text-[24px] font-black mt-4">24 روز</p>
      </div>
      <v-form @submit.prevent="submitData">
        <div class="mt-10">
          <p class="px-2 text-[12px] mb-1">قالب انتخابی شما</p>
          <v-text-field-primary
            :disabled="disableInputs"

            v-model="formData.selectedTemplate"
            required
        
          >
          </v-text-field-primary>
        </div>
        <div class="mt-2">
          <p class="px-2 text-[12px] mb-1">رنگ انتخابی شما</p>
          <v-text-field-primary
            :disabled="disableInputs"
    
            v-model="formData.selectedColor"
            required
       
          >
          </v-text-field-primary>
        </div>
        <div class="my-9 text-center">
          <BaseButtonFill
            mode="primary"
            text="پیش نمایش منو"
            append="mdi-eye-outline"
            class="px-4 py-3  text-[14px] !font-semibold w-48 mx-auto"
          />
          <BaseButtonOutline
            mode="secondary"
            text="ویراش قالب و رنگ"
            append="mdi-pencil"
            class="px-4 py-3 mx-3 mt-3 text-[14px] !font-semibold w-48"
          />
        </div>
        <div>
          <p class="px-2 text-[12px] mb-1">نام مجموعه شما</p>
          <v-text-field-primary
            :disabled="disableInputs"
          
            v-model="formData.companyName"
            required
         
          >
          </v-text-field-primary>
        </div>
        <div class="mt-2">
          <p class="px-2 text-[12px] mb-1">شماره تماس</p>
          <v-text-field-primary
            :disabled="disableInputs"
          
            v-model="formData.phoneNumber"
            required
         
          >
          </v-text-field-primary>
        </div>
        <div class="mt-2">
          <p class="px-2 text-[12px] mb-1">استان</p>
          <v-autocomplete
            :items="states"
         
            v-model="formData.selectedState"
            :counter="false"
          
            :disabled="disableInputs"
          />
        </div>
        <div class="mt-2">
          <p class="px-2 text-[12px] mb-1">شهر</p>
          <v-autocomplete
            :items="getCitiesByStates(formData.selectedState)"
         
            v-model="formData.selectedCity"
            :counter="false"
          
            :disabled="disableInputs"
          />
        </div>
        <div class="mt-2">
          <p class="px-2 text-[12px] mb-1">محله</p>
          <v-text-field-primary
            :disabled="disableInputs"
          
            v-model="formData.parish"
            required
         
          >
          </v-text-field-primary>
        </div>

        <div class="mt-2">
          <p class="px-2 text-[12px] mb-1">خیابان</p>
          <v-text-field-primary
            :disabled="disableInputs"
          
            v-model="formData.street"
            required
         
          >
          </v-text-field-primary>
        </div>
        <div class="mt-2">
          <p class="px-2 text-[12px] mb-1">پلاک</p>
          <v-text-field-primary
            :disabled="disableInputs"
          
            v-model="formData.unit"
            required
         
          >
          </v-text-field-primary>
        </div>
        <div class="mt-2">
          <p class="px-2 text-[12px] mb-1">آدرس اینستاگرام</p>
          <v-text-field-primary
            :disabled="disableInputs"
          
            v-model="formData.instagram"
            required
         
          >
          </v-text-field-primary>
        </div>
        <div class="mt-2">
          <p class="px-2 text-[12px] mb-1">آدرس تلگرام</p>
          <v-text-field-primary
            :disabled="disableInputs"
          
            v-model="formData.telegram"
            required
         
          >
          </v-text-field-primary>
        </div>
        <div class="mt-2">
          <p class="px-2 text-[12px] mb-1">آدرس وبسایت</p>
          <v-text-field-primary
            :disabled="disableInputs"
          
            v-model="formData.website"
            required
         
          >
          </v-text-field-primary>
        </div>
        <BaseButtonFill
          text="ثبت تغییرات"
          type="submit"
          mode="primary"
          class="mb-15"
          v-if="!disableInputs"
        />
      </v-form>
    </div>
  </div>
</template>
<script setup>
const formData = ref({
  selectedTemplate: "قالب سنتی",
  selectedColor: "طلایی",
  companyName: "جابرکافه",
  phoneNumber: "۰۹۱۲۲۲۲۲۲",
  selectedState: "کرج",
  selectedCity: "گوهردشت",
  parish: "گوهردشت",
  street: "اصلی",
  unit: "۳۴۵",
  instagram: "rayacofe12",
  telegram: "rayacofe12",
  website: "www.rayacofe12.com",
});
const disableInputs = ref(true);
const cities = ref(city());
const states = ref(Object.keys(cities.value));
const getCitiesByStates = (states) => {
  return states ? cities.value[states] : [];
};
const editInputs = () => {
  disableInputs.value = false;
};
const submitData = () => {
  disableInputs.value = true;
};
</script>

<style></style>
