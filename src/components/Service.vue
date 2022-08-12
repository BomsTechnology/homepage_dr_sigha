<script setup lang="ts">
import img1 from "@/assets/images/bg1.webp";
import img2 from "@/assets/images/bg2.jpg";
import img3 from "@/assets/images/bg3.jpg";
import { ref } from "vue";
const items = [img1, img2, img3];
const img = ref(items[1]);
</script>

<template>
  <div
    class="section h-screen bg-fixed bg-gray-50 relative overflow-hidden bg-cover object-cover"
    :style="{ 'background-image': `url(${img})` }"
  >
    <div
      class="bg-black/50 w-full h-full absolute inset-0 flex flex-col items-center lg:pt-20"
    >
      <div
        @mouseenter="img = items[1]"
        class="items-center justify-center lg:justify-end flex h-full w-full px-60"
      >
        <a href="#" class="text-3xl lg:text-6xl font-semibold text-white">
          Dermatologie
        </a>
      </div>
      <div
        @mouseenter="img = items[0]"
        class="items-center justify-center lg:justify-start flex h-full w-full px-60"
      >
        <a href="#" class="text-3xl lg:text-6xl font-semibold text-white">
          Médécine Esthétique
        </a>
      </div>
      <div
        @mouseenter="img = items[2]"
        @mouseleave="img = items[1]"
        class="items-center justify-center lg:justify-end flex h-full w-full"
      >
        <a href="#" class="text-3xl lg:text-6xl font-semibold text-white px-60">
          Cosmétique
        </a>
      </div>
    </div>
  </div>
</template>
