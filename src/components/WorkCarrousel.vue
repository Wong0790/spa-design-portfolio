<script lang="ts" setup>
import { ref, computed } from "vue";
import { images } from "../data/data.ts";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import ArrowRight from "../components/Icons/ArrowRight.vue";
import ArrowLeft from "../components/Icons/ArrowLeft.vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const smallerThanLg = ref(breakpoints.smaller("lg"));
const smallerThanSm = ref(breakpoints.smaller("sm"));

const itemsToShow = computed(() =>
  !smallerThanLg.value ? 2.5 : !smallerThanSm.value ? 1.5 : 1.2
);
</script>

<template>
  <Carousel :items-to-show="itemsToShow" :wrap-around="true">
    <Slide v-for="(image, index) in images" :key="index">
      <img :src="image.src" :alt="image.alt" class="carousel__item" />
    </Slide>
    <template #addons>
      <Navigation>
        <template #next>
          <ArrowRight />
        </template>
        <template #prev>
          <ArrowLeft />
        </template>
      </Navigation>
    </template>
  </Carousel>
</template>

<style>
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid #030303;
  border-radius: 50%;
  background-color: #030303;
}

.carousel__prev:hover,
.carousel__next:hover {
  border: 5px solid #755cde;
  background-color: #755cde;
}
</style>
