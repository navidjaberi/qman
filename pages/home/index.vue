<template>
  <div>
    <div
      class="w-[380px] md:w-9/12 mx-auto px-4 flex h-[250px] md:h-[350px] lg:h-[400px] justify-around"
    >
      <p
        class="!sans text-accent-800 text-[20px] md:text-[35px] lg:text-[45px] font-black drop-shadow-md -mr-10"
      >
        خلاق ترین ارائه کننده
      </p>

      <v-img
        src="/img/cellphone-mockup.png"
        class="!absolute w-[400px] md:w-[550px] lg:w-[650px] top-24"
      />
      <p
        class="!sans text-accent-800 text-[20px] md:text-[35px] lg:text-[45px] font-black px-4 drop-shadow-md self-end"
      >
        در ایران
      </p>
    </div>
    <div class="mt-8 px-4">
      <p class="text-[16px] !font-black">
        <span class="text-[18px] text-gr"> کیومن</span> چیکار میکنه؟
      </p>
      <p class="mt-4 text-[16px]">
        کیومن باتوجه به تغییر قیمت های لحظه ای مواد اولیه مصرفی رستوران و کافه ها، هزینه های سنگین
        طراحی و چاپ منو های کاغذی و البته هم مسیرشدن با پیشرفت تکنولوژی و ارتباط مداوم آدم ها با
        وسایل دیجیتالی، راه حلی برای پایان تمام این دغدغه هاست. لازم به ذکر هستش که بگیم تیم توسعه
        ما در مرحله اول طی تحقیقات و جلسات متعدد با فعالان این دو حوزه نیازها، دغدغه ها و حتی سلیقه
        شخصیشون رو شناسایی کرده و بعد با توجه به خواسته ها، تجربیات و انتظارات آدم ها داخل اتاق
        فکرمون به ایده پردازی رسیده تا بتونه محصولی رو خلق بکنه تا هم صاحبین کسب و کار و هم مشتریان
        مجموعه های درحال همکاری با کیومن بهترین تجربه رو از استفاده با این پلتفرم داشته باشن.
      </p>
    </div>
    <BaseButtonOutline
      class="!text-[16px] px-4 py-2 mx-auto mt-1"
      text="اطلاعات بیشتر"
      mode="primary"
    ></BaseButtonOutline>
    <div class="mt-9 relative slide px-5">
      <p class="text-[16px] !font-black">
        نگاهی به قالب های <span class="text-[18px] text-gr"> کیومن</span>
      </p>
      <v-slide-group
        v-model="model"
        class="ltr mt-5"
        selected-class="bg-primary"
        multiple
        show-arrows
        prev-icon="mdi-chevron-left-circle-outline"
        next-icon="mdi-chevron-right-circle-outline"
      >
        <CardTemplate v-for="n in 15" :key="n" />
      </v-slide-group>
    </div>
    <div class="mt-8 px-4">
      <div class="flex md:w-5/6 lg:w-4/6 mx-auto h-full items-end">
        <div class="w-[60%] mx-1 h-28 md:h-36 lg:h-48 overflow-hidden relative">
          <div class="relative">
            <p
              class="text-white text-[14px] md:text-[18px] lg:md:text-[20px] !font-black absolute right-1/2 top-16 translate-x-1/2"
            >
              کمک نیاز داری؟
            </p>

            <NuxtImg src="/svg/home/shape-green.svg" class="w-full"> </NuxtImg>
          </div>
        </div>
        <div class="w-[40%] mx-1">
          <v-img src="/svg/home/shape-orange.svg">
            <v-img
              src="/svg/home/phone.svg"
              class="mx-auto md:max-2xl:!mt-10 md:max-2xl:w-56 w-28 mt-3"
            >
            </v-img
          ></v-img>
        </div>
      </div>
      <div class="md:w-5/6 lg:w-4/6 mx-auto mt-2 px-1 relative">
        <div
          class="absolute right-1/2 translate-x-1/2 top-3 md:translate-y-1/2 lg:translate-y-1/2 w-4/6"
        >
          <p
            class="text-white text-[13px] md:text-[18px] lg:md:text-[20px] !font-black text-center"
          >
            برای انتخاب بهتر و توضیحات کامل کافیه شماره ات رو وارد کنی تا تو سریع ترین زمان باهات
            تماس بگیریم
          </p>
          <v-form validate-on="input">
            <v-text-field-primary
              class="mt-5"
              placeholder="شماره تماس خود را وارد کنید"
              single-line
              :rules="phone"
            >
              <template #append-inner>
                <BaseButtonFill
                  mode="secondary"
                  prepend="mdi-phone"
                  class="!rounded-r-none !rounded-l-sm !h-[40px]"
                />
              </template>
            </v-text-field-primary>
          </v-form>
        </div>
        <NuxtImg src="/svg/home/shape-blue.svg" class="w-full"></NuxtImg>
      </div>
    </div>
    <div class="mt-20">
      <div>
        <v-slide-group
          v-model="model"
          class="mt-5"
          selected-class="bg-primary"
          prev-icon="mdi-chevron-left-circle-outline"
          next-icon="mdi-chevron-right-circle-outline"
        >
          <CardComment
            v-for="n in 15"
            :key="n"
            status="درحال همکاری با کیومن"
            title="جابر کافه"
            text="استفاده از خدمات منو دیجیتال این سایت یک تجربه عالی برای کافه ما بوده است. طراحی‌های متنوع و زیبای منوها باعث شده تا مشتریان بیشتری جذب کافه ما شوند و بتوانیم به راحتی منوهایمان را به‌روز رسانی کنیم. پشتیبانی حرفه‌ای و سریع این تیم نیز یکی از نقاط قوت آن‌ها است."
          />
        </v-slide-group>
      </div>
      <div class="mt-20 relative slide">
        <p class="text-[16px] !font-black px-4">مجموعه های در حال همکاری باما</p>
        <v-slide-group
          v-model="model"
          class="ltr mt-5"
          selected-class="bg-primary"
          :show-arrows="lgAndUp"
          prev-icon="mdi-chevron-left-circle-outline"
          next-icon="mdi-chevron-right-circle-outline"
        >
          <div
            v-for="n in 15"
            :key="n"
            class="bg-white size-32 mx-2 rounded-full flex justify-center align-center"
          >
            <v-img src="/img/logo-example.png" cover class="size-28" />
          </div>
        </v-slide-group>
      </div>
      <div class="mt-20 md:w-3/4 mx-auto flex align-center px-6">
        <div class="w-1/2 text-center">
          <p class="text-[28px] font-black text-main-blue-800">پشتیبانی تلفنی</p>
          <p class="text-[22px] font-semibold text-main-blue-800 mt-4">همه روزه</p>
          <p class="text-[16px] font-black text-accent-800 mt-2">از 8 تا 22</p>
          <p class="text-[24px] text-stroke ltr mt-4">0930 8080 454</p>
        </div>
        <div class="w-1/2">
          <NuxtImg src="/svg/home/contact-vector.svg" class="w-full"> </NuxtImg>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { lgAndUp } = useDisplay();
const model = ref();
const { phone } = useFormRules(false);
</script>

<style lang="scss">
.text-gr {
  background: linear-gradient(90deg, #00a6ed 0%, #1f43ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.slide {
  .v-slide-group__next {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .v-slide-group__prev {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0px;
    left: 30px;
  }
}

.text-stroke {
  -webkit-text-stroke: 0.5px black;
  color: transparent;
  font-weight: 900;
}
</style>
