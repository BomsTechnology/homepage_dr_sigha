<script setup lang="ts">
import img1 from "@/assets/images/bg1.webp";
import img2 from "@/assets/images/bg2.jpg";
import img3 from "@/assets/images/bg3.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import "swiper/css";
// import { ref } from "vue";
const items = [img1, img2, img3, img1, img2, img3];
const modules = [Autoplay];
</script>
<template>
  <div class="h-screen bg-white w-full relative">
    <div class="py-8 px-4 h-full">
      <swiper
        :slidesPerView="4"
        :spaceBetween="5"
        :loop="true"
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
            spaceBetween: 50,
          },
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="h-full rounded-md"
      >
        <swiper-slide v-for="(item, index) in items">
          <div
            :class="[
              index % 2 == 0
                ? 'lg:h-2/3 h-full bg-red-50 lg:mt-60 rounded-md shadow overflow-hidden'
                : 'lg:h-2/3 h-full bg-red-50 rounded-md shadow overflow-hidden',
            ]"
          >
            <img :src="item" class="w-full h-full object-cover" alt="" />
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div
      class="h-full w-full absolute top-0 bg-black/50 z-10 flex justify-center items-center"
    >
      <a
        href="#"
        class="text-3xl lg:text-6xl font-semibold text-white px-4 flex lg justify-center space-x-4"
      >
        <span>
          <svg
            class="lg:h-12 lg:w-12 w-8 h-8"
            viewBox="0 0 40 40"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 20.1117C0 30.055 7.22167 38.3233 16.6667 40V25.555H11.6667V20H16.6667V15.555C16.6667 10.555 19.8883 7.77833 24.445 7.77833C25.8883 7.77833 27.445 8 28.8883 8.22167V13.3333H26.3333C23.8883 13.3333 23.3333 14.555 23.3333 16.1117V20H28.6667L27.7783 25.555H23.3333V40C32.7783 38.3233 40 30.0567 40 20.1117C40 9.05 31 0 20 0C9 0 0 9.05 0 20.1117Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span>Médécine Esthétique au Cameroun</span>
      </a>
    </div>
  </div>
</template>
