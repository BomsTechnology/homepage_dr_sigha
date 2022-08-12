<script setup lang="ts">
import img1 from "@/assets/images/bg1.webp";
import img2 from "@/assets/images/bg2.jpg";
import img3 from "@/assets/images/bg3.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
// import { ref } from "vue";
const items = [img1, img2, img3];
</script>
<template>
  <div class="h-screen bg-white w-full relative py-8">
    <swiper
      :slidesPerView="4"
      :spaceBetween="5"
      :breakpoints="{
        300: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }"
      class="h-full"
    >
      <template v-for="(item, index) in items">
        <swiper-slide
          v-if="index % 2 == 0"
          class="h-2/3 mt-[30vh] w-96 bg-red-50 rounded-md shadow overflow-hidden"
        >
          <img :src="item" class="w-full h-full object-cover" alt="" />
        </swiper-slide>
        <swiper-slide
          v-else
          class="h-2/3 w-96 mt-[30vh] bg-red-50 rounded-md shadow overflow-hidden"
        >
          <img :src="item" class="w-full h-full object-cover" alt="" />
        </swiper-slide>
      </template>
    </swiper>
    <div class="h-full w-full absolute top-0 bg-black/50 z-10"></div>
  </div>
</template>
