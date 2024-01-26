<script setup lang="ts">
import FreeConsultation from "./components/FreeConsultation.vue";
import SkillsSection from "./components/SkillsSection.vue";
import AboutSection from "./components/AboutSection.vue";
import WorkSection from "./components/WorkSection.vue";
</script>

<template>
  <header>
    <FreeConsultation />
  </header>
  <main>
    <SkillsSection />
    <AboutSection />
    <WorkSection />
    <section id="consultation"></section>
  </main>
  <footer></footer>
</template>
