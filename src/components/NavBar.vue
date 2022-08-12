<script setup lang="ts">
import { XIcon, MenuIcon, ChevronDownIcon } from "@heroicons/vue/solid";
import { reactive, ref } from "vue";
const open = reactive({
  menu: false,
  submenu: false,
});
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
        ? 'w-full lg:py-6 py-4 px-4 shadow-md z-20 fixed bg-white/75'
        : 'w-full lg:py-6 py-4 lg:px-10 px-4 lg:shadow-none z-10 fixed bg-white lg:bg-transparent',
    ]"
  >
    <div class="lg:px-4 flex lg:flex-row flex-col items-center justify-between">
      <div
        class="lg:w-72 flex justify-between items-center w-full lg:px-0 px-3"
      >
        <a
          href="#"
          class="text-title font-satisfy lg:text-3xl md:2xl text-xl font-bold"
        >
          <span>Dr. SIGHA Odette</span>
        </a>
        <div class="relative block lg:hidden" @click="open.menu = !open.menu">
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
              v-if="!open.menu"
              type="button"
              class="hover:text-title text-gray-500 focus:text-title focus:outline-none"
              aria-label="toggle menu"
            >
              <MenuIcon class="h-6 w-6 fill-current" />
            </button>
            <button
              v-if="open.menu"
              type="button"
              class="hover:text-title text-gray-500 focus:text-title focus:outline-none"
              aria-label="toggle menu"
            >
              <XIcon class="h-6 w-6 fill-current" />
            </button>
          </transition-group>
        </div>
      </div>
      <div
        class="space-x-4 w-full xl:text-lg text-sm lg:block hidden text-right text-gray-500"
      >
        <a
          href="#"
          class="inline-block px-4 py-2 rounded hover:bg-title hover:text-white transition-colors"
          >Mon Parcours</a
        >
        <div
          @mouseenter="open.submenu = true"
          @mouseleave="open.submenu = false"
          class="inline-block relative hover:bg-title rounded-t px-4 py-2 hover:text-white transition-colors"
        >
          <a href="#" class="block w-full">Médécine Esthétique</a>
          <Transition
            enter-active-class="transition duration-500"
            enter-from-class="opacity-0  scale-75"
            enter-to-class="opacity-1 scale-100"
            leave-active-class="transition duration-500"
            leave-from-class="opacity-1 scale-100"
            leave-to-class=" opacity-0 scale-75"
          >
            <nav
              v-show="open.submenu"
              class="absolute w-60 break-words text-sm inline-block rounded bg-white shadow-md top-11 left-0 text-left"
            >
              <a
                href="#"
                class="block py-2 px-4 rounded text-gray-500 hover:bg-title hover:text-white transition-colors"
                >Rajeunissement facial</a
              >
              <a
                href="#"
                class="block py-2 px-4 rounded text-gray-500 hover:bg-title hover:text-white transition-colors"
                >Liposuccion / Liposculpture du corps</a
              >
              <a
                href="#"
                class="block py-2 px-4 rounded text-gray-500 hover:bg-title hover:text-white transition-colors"
                >Peeling</a
              >
            </nav>
          </Transition>
        </div>

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
          class="inline-block lg:px-4 px-3 py-2 rounded hover:bg-title hover:text-white transition-colors"
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
          v-if="open.menu"
          class="mt-4 lg:hidden w-full text-gray-500 shadow rounded bg-white"
        >
          <a
            href="#"
            class="block px-3 py-2 rounded hover:bg-title border-b hover:text-white transition-colors"
            >Mon Parcours</a
          >
          <a
            href="#"
            class="flex px-3 py-2 justify-between items-center rounded border-b hover:bg-title hover:text-white transition-colors"
          >
            <span>Médécine Esthétique</span>
            <ChevronDownIcon class="w-5 h-5 text-title" />
          </a>

          <nav
            class="break-words text-sm block pl-10 bg-gray-50 border-b text-left"
          >
            <a
              href="#"
              class="block py-2 px-4 text-gray-500 hover:bg-title hover:text-white transition-colors"
              >Rajeunissement facial</a
            >
            <a
              href="#"
              class="block py-2 px-4 text-gray-500 hover:bg-title hover:text-white transition-colors"
              >Liposuccion / Liposculpture du corps</a
            >
            <a
              href="#"
              class="block py-2 px-4 text-gray-500 hover:bg-title hover:text-white transition-colors"
              >Peeling</a
            >
          </nav>
          <a
            href="#"
            class="block px-3 py-2 rounded hover:bg-title border-b hover:text-white transition-colors"
            >Bel ann cosmetic</a
          >
          <a
            href="#"
            class="block px-3 py-2 rounded hover:bg-title border-b hover:text-white transition-colors"
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
