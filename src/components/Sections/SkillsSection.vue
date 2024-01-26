<script lang="ts" setup>
import SkillCard from "@/components/SkillCard.vue";
import { skills } from "@/data/data.js";
</script>

<template>
  <section id="skills" class="padding">
    <h1 class="mx-auto">Design solutions made easy</h1>
    <p>
      With over ten years of experience in various design disciplines, I’m your
      one-stop shop for your design needs.
    </p>
    <div class="skills-container">
      <SkillCard v-for="(skill, index) in skills" :key="index" :skill="skill" />
    </div>
  </section>
</template>
