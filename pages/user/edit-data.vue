<template>
  <div>
    <BaseDialog :dialogActive="dialog" @update:dialogActive="dialogActive" mode="addItem" />

    <div class="px-5">
      <div class="flex justify-between align-center">
        <p class="md:text-[18px] text-[14px] font-bold">ویرایش و اضافه کردن اطلاعات منو</p>
        <v-btn
          icon="mdi-chevron-left-circle-outline"
          color="black"
          variant="text"
          size="x-large"
          @click="currentTab--"
        ></v-btn>
      </div>
      <v-form class="md:!mt-10 lg:!mt-10 mt-5" v-if="currentTab === 0">
        <div class="md:max-2xl:w-1/2 w-full mx-auto">
          <p class="font-semibold mb-2">حوزه فعالیت شما</p>
          <v-select
            variant="outlined"
            :items="[
              'کافه و رستوران ها',
              'کافه و رستوران ها',
              'کافه و رستوران ها',
              'کافه و رستوران ها',
              'کافه و رستوران ها',
              'کافه و رستوران ها',
            ]"
            placeholder="انتخاب"
          ></v-select>
          <div class="text-center flex align-end h-96 justify-center mb-10">
            <BaseButtonFill text="بعدی" mode="primary" class="px-8" @click-handler="currentTab++" />
          </div>
        </div>
      </v-form>
      <v-form class="md:!mt-10 lg:!mt-10 mt-5" v-if="currentTab === 1">
        <div class="md:max-2xl:w-1/2 w-full mx-auto">
          <div>
            <p class="font-semibold mb-2">دسته بندی</p>

            <v-select
              variant="outlined"
              :items="['غذا', 'نوشیدنی گرم', 'غذا', 'نوشیدنی گرم', , 'غذا', 'نوشیدنی گرم']"
              placeholder="انتخاب"
            ></v-select>
          </div>
          <div class="mt-6">
            <p class="font-semibold mb-2">زیر دسته بندی</p>

            <v-select
              variant="outlined"
              :items="['غذا', 'نوشیدنی گرم', 'غذا', 'نوشیدنی گرم', , 'غذا', 'نوشیدنی گرم']"
              placeholder="انتخاب"
            ></v-select>
          </div>
          <div class="text-center flex flex-col align-center justify-end mb-10 mt-40">
            <p>درصورت نیاز از گزینه های ذیل استفاده کنید</p>
            <div class="flex flex-wrap justify-center">
              <v-checkbox
                v-for="i in 24"
                v-model="ex4"
                color="#1F43FF"
                label="چلوکیاب"
                value="red"
                hide-details
              ></v-checkbox>
            </div>
            <div class="flex gap-2 px-2 w-full mt-4">
              <div class="basis-1/2">
                <BaseButtonFill text="ثبت دسته بندی" mode="primary" class="!py-1" btn-block />
              </div>
              <div class="basis-1/2">
                <BaseButtonFill
                  text="اضافه کردن گزینه"
                  mode="secondary"
                  class="!py-1"
                  append="mdi-plus"
                  btn-block
                  type="button"
                  @click-handler="dialog = true"
                />
              </div>
            </div>
          </div>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentTab = ref(0);
const ex4 = ref(false);
const dialog = ref<boolean>(false);
const dialogActive = (newVal: boolean) => {
  dialog.value = newVal;
};
</script>

<style></style>
