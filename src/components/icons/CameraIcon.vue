<script lang="ts" setup>
import gsap from "gsap";
import { watch } from "vue";
import { ref, computed } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { useElementHover } from "@vueuse/core";

const path = ref<SVGPathElement | null>(null);
const breakpoints = useBreakpoints(breakpointsTailwind);
const smallerThanMd = ref(breakpoints.smaller("md"));
const size = computed(() => (!smallerThanMd.value ? "64" : "48"));
const cx = computed(() => (!smallerThanMd.value ? "32" : "24"));
const cy = computed(() => (!smallerThanMd.value ? "32" : "24"));
const r = computed(() => (!smallerThanMd.value ? "14" : "10.5"));
const strokeWidth = computed(() => (!smallerThanMd.value ? "4" : "3"));

const myHoverableElement = ref();
const isHovered = useElementHover(myHoverableElement);

watch(isHovered, (newX) => {
  const timeline = gsap.timeline({
    defaults: { transformOrigin: "50% 50%", ease: "back.out(1.7)" },
  });
  if (newX) {
    timeline.to(path.value, {
      scale: 0.5,
      duration: 0.7,
      strokeDasharray: 100,
      strokeDashoffset: 0,
      ease: "power2.in",
    });
  } else {
    timeline.to(path.value, {
      scale: 1,
      duration: 0.3,
      strokeDasharray: 100,
      strokeDashoffset: 0,
      ease: "power2.out",
    });
  }
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    xmlns="http://www.w3.org/2000/svg"
    ref="myHoverableElement"
  >
    <g fill="none" fill-rule="evenodd">
      <path fill="#030303" d="M0 0h64v64H0z" />
      <circle
        ref="path"
        stroke="#FFF7F0"
        :stroke-width="strokeWidth"
        :cx="cx"
        :cy="cy"
        :r="r"
      />
    </g>
  </svg>
</template>
