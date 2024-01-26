<script setup lang="ts">
import FreeConsultation from "./components/FreeConsultation.vue";
import SkillsSection from "./components/SkillsSection.vue";
</script>

<template>
  <header>
    <FreeConsultation />
  </header>
  <main>
    <SkillsSection />
    <section id="about"></section>
    <section id="work"></section>
    <section id="consultation"></section>
  </main>
  <footer></footer>
</template>
