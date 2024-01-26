<script setup lang="ts">
import FreeConsultation from "./components/FreeConsultation.vue";
import SkillsSection from "./components/Sections/SkillsSection.vue";
import AboutSection from "./components/Sections/AboutSection.vue";
import WorkSection from "./components/Sections/WorkSection.vue";
import ConsultationSection from "./components/Sections/ConsultationSection.vue";
</script>

<template>
  <header>
    <FreeConsultation />
  </header>
  <main>
    <SkillsSection />
    <AboutSection />
    <WorkSection />
    <ConsultationSection />
  </main>
  <footer class="mt-10 lg:mt-60px">
    <FreeConsultation />
  </footer>
</template>
