<template>
  <div class="md:px-20 lg:px-20 xl:px-20 2xl:px-20 px-5">
    <div>
      <v-img src="/img/about.png" width="500" class="mx-auto" />
    </div>
    <div class="mt-5">
      <h1 class="font-bold text-[22px]">چیشد که کیومن شکل گرفت؟</h1>
      <p class="md:max-2xl:!text-[18px] text-[12px] mt-4">
        کیومن باتوجه به تغییر قیمت های لحظه ای مواد اولیه مصرفی رستوران و کافه ها، هزینه های سنگین
        طراحی و چاپ منو های کاغذی و البته هم مسیرشدن با پیشرفت تکنولوژی و ارتباط مداوم آدم ها با
        وسایل دیجیتالی، راه حلی برای پایان تمام این دغدغه هاست. لازم به ذکر هستش که بگیم تیم توسعه
        ما در مرحله اول طی تحقیقات و جلسات متعدد با فعالان این دو حوزه نیازها، دغدغه ها و حتی سلیقه
        شخصیشون رو شناسایی کرده و بعد با توجه به خواسته ها، تجربیات و انتظارات آدم ها داخل اتاق
        فکرمون به ایده پردازی رسیده تا بتونه محصولی رو خلق بکنه تا هم صاحبین کسب و کار و هم مشتریان
        مجموعه های درحال همکاری با کیومن بهترین تجربه رو از استفاده با این پلتفرم داشته باشن.
      </p>
    </div>
    <div class="mt-5">
      <h1 class="font-bold text-[22px]">چرا کیومن رو انتخاب کنیم؟</h1>
      <div
        class="mt-5 md:max-2xl:grid grid-cols-2 grid-rows-2 gap-10 md:max-2xl:px-20 my-20"
      >
        <v-card :elevation="20" class="relative my-5" max-width="400" height="230">
          <div class="pa-5">
            <p class="text-main-blue-800 font-semibold text-center leading-6">
              ما با تیمی از طراحان خلاق و با تجربه، منوهای دیجیتال بی‌نظیری ارائه می‌دهیم که هر کافه
              و رستورانی را متمایز می‌کند. قالب‌های متنوع ما با سبک‌های مختلف (کلاسیک، مدرن،
              مینیمالیستی و غیره) به شما امکان می‌دهند که منویی را انتخاب کنید که با سلیقه و برند
              شما هماهنگ باشد.
            </p>
          </div>
          <div
            class="h-[57px] !bg-gradient-to-r from-[#00A6ED] to-[#1F43FF] flex align-center justify-center text-white font-bold absolute bottom-0 w-full"
          >
            <p class="text-[17px]">طراحی‌های منحصر به فرد</p>
          </div>
        </v-card>
        <v-card :elevation="20" class="relative my-5" max-width="400" height="230">
          <div class="pa-5">
            <p class="text-accent-800 font-semibold text-center leading-6">
              ما می‌دانیم که هر کسب‌وکاری نیازهای خاص خود را دارد. به همین دلیل، قالب‌های ما به
              گونه‌ای طراحی شده‌اند که شما بتوانید به راحتی رنگ‌ها، فونت‌ها، تصاویر و محتوا را
              شخصی‌سازی کنید و منویی منحصر به فرد برای خود ایجاد کنید.
            </p>
          </div>
          <div
            class="h-[57px] !bg-gradient-to-r from-[#F46242] to-[#FFA800] flex align-center justify-center text-white font-bold absolute bottom-0 w-full"
          >
            <p class="text-[17px]">شخصی سازی آسان</p>
          </div>
        </v-card>
        <v-card :elevation="20" class="relative my-5" max-width="400" height="230">
          <div class="pa-5">
            <p class="text-accent-800 font-semibold text-center leading-6">
              ما به ارائه بهترین کیفیت با قیمت‌های مناسب متعهد هستیم. با انتخاب [نام برند]، شما
              بهترین ارزش را برای سرمایه‌گذاری خود دریافت می‌کنید.
            </p>
          </div>
          <div
            class="h-[57px] !bg-gradient-to-r from-[#F46242] to-[#FFA800] flex align-center justify-center text-white font-bold absolute bottom-0 w-full"
          >
            <p class="text-[17px]">قیمت های رقابتی</p>
          </div>
        </v-card>
        <v-card :elevation="20" class="relative my-5" max-width="400" height="230">
          <div class="pa-5">
            <p class="text-main-blue-800 font-semibold text-center leading-6">
              منوهای دیجیتال ما با توجه به نیازهای کاربران طراحی شده‌اند. ناوبری ساده و واکنش‌گرا
              بودن منوها، اطمینان می‌دهد که مشتریان شما به راحتی بتوانند آیتم‌های مورد نظر خود را
              پیدا کنند، چه از طریق موبایل، تبلت یا دسکتاپ.
            </p>
          </div>
          <div
            class="h-[57px] !bg-gradient-to-r from-[#00A6ED] to-[#1F43FF] flex align-center justify-center text-white font-bold absolute bottom-0 w-full"
          >
            <p class="text-[17px]">تجربه کاربری برتر</p>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
