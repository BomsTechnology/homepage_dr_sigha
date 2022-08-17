<script setup lang="ts">
import { RouteRecordName } from "vue-router";
</script>

<template>
  <main class="flex">
    <router-view name="sidebar"></router-view>

    <div class="w-full">
      <router-view name="navbar"></router-view>

      <router-view v-slot="{ Component, route }">
        <Transition
          enter-active-class="transition duration-1000"
          enter-from-class="opacity-0 translate-y-10"
          enter-to-class="opacity-1 translate-y-0"
          leave-active-class="transition duration-500 "
          leave-from-class="opacity-1 translate-y-0"
          leave-to-class="opacity-0 -translate-y-10"
          mode="out-in"
        >
          <div :key="route.name!">
            <component :is="Component" />
          </div>
        </Transition>
      </router-view>
      <router-view name="footer"></router-view>
    </div>
  </main>
</template>
