<script setup lang="ts">
import FreeConsultation from "@components/FreeConsultation.vue";
import SkillsSection from "@sections/SkillsSection.vue";
import AboutSection from "@sections/AboutSection.vue";
import WorkSection from "@sections/WorkSection.vue";
import ConsultationSection from "@sections/ConsultationSection.vue";
import SocialItem from "./components/SocialItem.vue";
import { socials } from "./data/app-data";
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
          <SocialItem :url="social.url">
            <component :is="social.name"></component
          ></SocialItem>
        </li>
      </ul>
      <span class="font-semibold text-almost-black">
        &copy;2024
        <a
          href="https://wong0790-dev-profolio.netlify.app"
          target="_blank"
          class="portfolio-link"
        >
          Anneris E. Wong Jorge
        </a>
      </span>
    </div>
  </footer>
</template>
