<script lang="ts" setup>
defineProps({
  url: String,
});
</script>

<template>
  <div>
    <a :href="url" target="_blank"><slot></slot></a>
  </div>
</template>
