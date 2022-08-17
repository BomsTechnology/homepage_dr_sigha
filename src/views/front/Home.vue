<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import Service from "@/components/Service.vue";
import { ref, onMounted } from "vue";
import Description from "@/components/Description.vue";
import Carrousel from "@/components/Carrousel.vue";
import Contact from "@/components/Contact.vue";
const home = ref(null);

onMounted(() => {});
</script>

<template>
  <div ref="home">
    <Hero />
    <Service />
    <Description />
    <Carrousel />
    <Contact />
  </div>
</template>
