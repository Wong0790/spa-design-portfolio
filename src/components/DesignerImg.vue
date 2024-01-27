<script lang="ts" setup>
import { ref, computed } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const smallerThanXl = ref(breakpoints.smaller("xl"));
const smallerThanSm = ref(breakpoints.smaller("sm"));
const size = computed(() =>
  !smallerThanXl.value ? "445" : !smallerThanSm.value ? "364" : "300"
);
</script>

<template>
  <img
    src="@assets/image-amy.webp"
    alt="Designer image"
    :width="size"
    :height="size"
  />
</template>
