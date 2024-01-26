<script setup lang="ts">
import FreeConsultation from "./components/FreeConsultation.vue";
import {
  SkillsSection,
  AboutSection,
  WorkSection,
  ConsultationSection,
} from "@/components/Sections";
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
