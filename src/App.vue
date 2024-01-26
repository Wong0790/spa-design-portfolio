<script setup lang="ts">
import FreeConsultation from "./components/FreeConsultation.vue";
import SkillsSection from "./components/SkillsSection.vue";
import AboutSection from "./components/AboutSection.vue";
</script>

<template>
  <header>
    <FreeConsultation />
  </header>
  <main>
    <SkillsSection />
    <AboutSection />
    <section id="work"></section>
    <section id="consultation"></section>
  </main>
  <footer></footer>
</template>
