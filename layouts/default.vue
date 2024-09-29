<template>
  <div>
    <VApp class="rtl light-background">
     
        <GlobalTheHeader />
        <v-main class=" mt-32 text-black">
          <slot />
          
        </v-main>
        <GlobalTheFooter />
        <GlobalBottomNavbar class=" md:max-2xl:hidden"/>
   
    </VApp>
  </div>
</template>
<script setup></script>
<style></style>
