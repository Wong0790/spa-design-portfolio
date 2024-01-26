<script lang="ts" setup>
import { ref, computed } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const smallerThanMd = ref(breakpoints.smaller("md"));
const size = computed(() => (!smallerThanMd.value ? "64" : "48"));
const cx = computed(() => (!smallerThanMd.value ? "32" : "24"));
const cy = computed(() => (!smallerThanMd.value ? "32" : "24"));
const r = computed(() => (!smallerThanMd.value ? "14" : "10.5"));
const strokeWidth = computed(() => (!smallerThanMd.value ? "4" : "3"));
</script>

<template>
  <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <path fill="#030303" d="M0 0h64v64H0z" />
      <circle
        stroke="#FFF7F0"
        :stroke-width="strokeWidth"
        :cx="cx"
        :cy="cy"
        :r="r"
      />
    </g>
  </svg>
</template>
