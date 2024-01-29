<script lang="ts" setup>
import SkillCard from "@components/SkillCard.vue";
import { skills } from "../../data/app-data";
</script>

<template>
  <section
    id="skills"
    class="padding"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: '100',
        delay: 100,
      },
    }"
  >
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
