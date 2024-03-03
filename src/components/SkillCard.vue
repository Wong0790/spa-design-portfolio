<script lang="ts" setup>
import gsap from "gsap";
import { onMounted } from "vue";
import { Skill } from "../types/app-types";

defineProps({
  skill: {
    type: Object as () => Skill,
    required: true,
  },
});

onMounted(() => {
  gsap.set(".card", {
    autoAlpha: 0,
    transformOrigin: "50% 50%",
    scale: 0,
  });
  gsap
    .timeline({
      defaults: {
        stagger: {
          each: 0.1,
          from: 2,
          ease: "power.inOut",
        },
        scale: 1,
        autoAlpha: 1,
        ease: "back.out",
      },
    })
    .to(".card", {});
});
</script>

<template>
  <div :class="skill.style">
    <component :is="skill.component"></component>
    <p>{{ skill.name }}</p>
  </div>
</template>
