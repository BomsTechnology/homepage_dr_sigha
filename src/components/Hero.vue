<script setup lang="ts"></script>
<template>
  <div
    class="section h-screen overflow-hidden md:py-0 py-8 lg:px-20 bg-white w-full flex md:flex-row flex-col justify-center lg:space-x-10 items-center"
  >
    <div class="">
      <h1 class="lg:text-6xl text-4xl font-bold">
        Dr.
        <span
          class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block"
        >
          <span class="relative text-white">SIGHA</span>
        </span>
        Odette
      </h1>
      <div class="mt-8 font-light text-xl lg:text-2xl">
        <h2>Dermatologie / Vénérologie</h2>
        <h2>Médécine Esthétique</h2>
        <h2>Cosmétique</h2>
      </div>
    </div>
    <div class="relative">
      <div
        draggable="true"
        class="p-2 shadow rounded-full absolute md:top-60 top-44 bg-gray-300 left-5 text-xs"
      >
        Dermatologie / Vénérologie
      </div>
      <div
        draggable="true"
        class="p-2 shadow rounded-full absolute md:top-2/3 top-32 lg:top-1/2 md:left-1/2 bg-amber-200 text-xs"
      >
        Médécine Esthétique
      </div>
      <div
        draggable="true"
        class="p-2 shadow rounded-full absolute md:top-80 top-56 left-20 bg-emerald-500 text-white text-xs"
      >
        Cosmétique
      </div>
      <img
        src="@/assets/images/img.png"
        class="lg:w-full w-60 md:w-80 lg:h-full object-cover"
        alt=""
      />
    </div>
  </div>
</template>
