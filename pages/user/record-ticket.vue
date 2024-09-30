<template>
  <div class="min-h-screen max-w-[900px] mx-auto">
    <div class="px-5">
      <h1 class="font-bold text-[24px]">ثبت تیکت</h1>
      <v-form>
        <div class="md:max-2xl:flex justify-center align-center gap-5 mt-5">
          <div class="basis-1/2">
            <p>موضوع تیکت</p>
            <v-text-field-primary required class="mt-2" :rules="text" />
          </div>
          <div class="basis-1/2">
            <p>بخش مرتبط</p>
            <v-select-primary
              :items="['غذا', 'نوشیدنی گرم', 'غذا', 'نوشیدنی گرم', 'غذا', 'نوشیدنی گرم']"
              placeholder="انتخاب"
              class="mt-2"
              :rules="radio"
            ></v-select-primary>
          </div>
        </div>
        <div class="mt-7">
          <p class="mb-2">توضیحات:</p>
          <v-textarea-primary rows="12" v-model="textArea" rules="radio"> </v-textarea-primary>
        </div>
        <div class="w-full md:max-2xl:w-1/2 mx-auto">
          <div>
            <p>پیوست فایل</p>
            <v-file-input-primary
              small-chips
              append-inner-icon="mdi-camera"
              accept="image/png, image/jpeg, image/bmp"
              class="mt-2"
              prepend-icon=""
            />
          </div>
          <div>
            <p>شماره تلفن همراه</p>
            <v-text-field-primary class="mt-2" :rules="phone" />
          </div>
          <div>
            <p>اولویت</p>
            <v-select-primary
              :items="['غذا', 'نوشیدنی گرم', 'غذا', 'نوشیدنی گرم', , 'غذا', 'نوشیدنی گرم']"
              placeholder="انتخاب"
              class="mt-2"
              :rules="radio"
            ></v-select-primary>
          </div>
        </div>
        <div class="mt-4 mb-10 text-center">
          <BaseButtonFill mode="primary" text="ثبت تیکت" class="!mx-auto" />
        </div>
      </v-form>
    </div>
  </div>
</template>

<script setup>
const { text, phone, radio } = useFormRules();
const formRef = ref(null);
const submitData = async () => {
  const { valid } = await formRef.value.validate();
};
</script>

<style></style>
