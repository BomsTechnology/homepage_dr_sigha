<script setup lang="ts">
import { XIcon, MenuIcon } from "@heroicons/vue/solid";
import { ref } from "vue";
const open = ref(false);
const isScroll = ref(false);
document.addEventListener("scroll", function () {
  let bodyTopPosition = document.body.getBoundingClientRect().top;
  if (bodyTopPosition < -150) {
    isScroll.value = true;
  } else {
    isScroll.value = false;
  }
});
</script>
<template>
  <nav
    :class="[
      isScroll
        ? 'w-full lg:py-6 py-4 px-4 shadow-md z-10 fixed bg-white/75'
        : 'w-full lg:py-6 py-4 px-4 lg:shadow-none z-10 fixed bg-white lg:bg-transparent',
    ]"
  >
    <div
      class="container mx-auto lg:px-4 flex lg:flex-row flex-col items-center justify-between"
    >
      <div
        class="lg:w-72 flex justify-between items-center w-full lg:px-0 px-3"
      >
        <a
          href="#"
          class="text-title font-satisfy lg:text-3xl text-xl font-bold"
        >
          <span>Dr. SIGHA Odette</span>
        </a>
        <div class="relative block lg:hidden" @click="open = !open">
          <transition-group
            enter-active-class="transition duration-500"
            enter-from-class="opacity-0 rotate-45"
            enter-to-class="opacity-1 rotate-0 "
            leave-active-class="transition duration-500 absolute"
            leave-from-class="opacity-1 rotate-0"
            leave-to-class="opacity-0 rotate-45"
            appear
          >
            <button
              v-if="!open"
              type="button"
              class="hover:text-title text-gray-500 focus:text-title focus:outline-none"
              aria-label="toggle menu"
            >
              <MenuIcon class="h-6 w-6 fill-current" />
            </button>
            <button
              v-if="open"
              type="button"
              class="hover:text-title text-gray-500 focus:text-title focus:outline-none"
              aria-label="toggle menu"
            >
              <XIcon class="h-6 w-6 fill-current" />
            </button>
          </transition-group>
        </div>
      </div>
      <div class="space-x-4 w-full lg:block hidden text-right text-gray-500">
        <a
          href="#"
          class="inline-block px-4 py-2 rounded hover:bg-title hover:text-white transition-colors"
          >Mon Parcours</a
        >
        <a
          href="#"
          class="inline-block px-4 py-2 rounded hover:bg-title hover:text-white transition-colors"
          >Médécine Esthétique</a
        >
        <a
          href="#"
          class="inline-block px-4 py-2 rounded hover:bg-title hover:text-white transition-colors"
          >Bel ann cosmetic</a
        >
        <a
          href="#"
          class="inline-block px-4 py-2 rounded hover:bg-title hover:text-white transition-colors"
          >Actualités</a
        >
        <a
          href="#"
          class="block lg:inline-block lg:px-4 px-3 py-2 rounded hover:bg-title hover:text-white transition-colors"
          >Contact</a
        >
      </div>
      <Transition
        enter-active-class="transition duration-500"
        enter-from-class="opacity-0 -translate-y-full absolute"
        enter-to-class="opacity-1 translate-y-0"
        leave-active-class="transition duration-500"
        leave-from-class="opacity-1/2 translate-y-0"
        leave-to-class="-translate-y-1/2 opacity-0 "
      >
        <div
          v-if="open"
          class="mt-4 lg:hidden w-full text-gray-500 shadow rounded bg-white"
        >
          <a
            href="#"
            class="block px-3 py-2 rounded hover:bg-title hover:text-white transition-colors"
            >Mon Parcours</a
          >
          <a
            href="#"
            class="block px-3 py-2 rounded hover:bg-title hover:text-white transition-colors"
            >Médécine Esthétique</a
          >
          <a
            href="#"
            class="block px-3 py-2 rounded hover:bg-title hover:text-white transition-colors"
            >Bel ann cosmetic</a
          >
          <a
            href="#"
            class="block px-3 py-2 rounded hover:bg-title hover:text-white transition-colors"
            >Actualités</a
          >
          <a
            href="#"
            class="block px-3 py-2 rounded hover:bg-title hover:text-white transition-colors"
            >Contact</a
          >
        </div>
      </Transition>
    </div>
  </nav>
</template>
