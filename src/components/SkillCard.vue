<script lang="ts" setup>
import { Skill } from "@customTypes/base.ts";

defineProps({
  skill: {
    type: Object as () => Skill,
    required: true,
  },
});
</script>

<template>
  <div :class="skill.style">
    <component :is="skill.component"></component>
    <p>{{ skill.name }}</p>
  </div>
</template>
