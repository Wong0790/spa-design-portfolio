<script lang="ts" setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import SkillCard from "@components/SkillCard.vue";
import { skills } from "@data/app-data";
gsap.registerPlugin(TextPlugin);

onMounted(() => {
  gsap.set(".skills-description", {
    scale: 0,
  });
  gsap.timeline().from("h1", { duration: 1, text: "", ease: "none" });
});
</script>

<template>
  <section id="skills" class="padding">
    <h1 class="mx-auto">Design solutions made easy</h1>
    <p>
      With over ten years of experience in various design disciplines, I’m your
      one-stop shop for your design needs.
    </p>
    <div class="skills-container">
      <SkillCard
        v-for="(skill, index) in skills"
        :key="index"
        :skill="skill"
        ref="main"
      />
    </div>
  </section>
</template>
