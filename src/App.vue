<script setup lang="ts">
import FreeConsultation from "@components/FreeConsultation.vue";
import SkillsSection from "@sections/SkillsSection.vue";
import AboutSection from "@sections/AboutSection.vue";
import WorkSection from "@sections/WorkSection.vue";
import ConsultationSection from "@sections/ConsultationSection.vue";
import SocialItem from "@components/SocialItem.vue";
import { socials } from "@data/app-data";
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
    <div class="text-center mt-24">
      <ul class="social-icons">
        <li v-for="(social, index) in socials" :key="index" class="group">
          <SocialItem :url="social.url" :aria="social.aria">
            <component :is="social.name"></component
          ></SocialItem>
        </li>
      </ul>
      <span class="font-semibold text-almost-black">
        &copy;2024 Anneris E. Wong Jorge
      </span>
    </div>
  </footer>
</template>
