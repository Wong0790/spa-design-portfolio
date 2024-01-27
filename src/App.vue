<script setup lang="ts">
import FreeConsultation from "@components/FreeConsultation.vue";
import SkillsSection from "@sections/SkillsSection.vue";
import AboutSection from "@sections/AboutSection.vue";
import WorkSection from "@sections/WorkSection.vue";
import ConsultationSection from "@sections/ConsultationSection.vue";
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
