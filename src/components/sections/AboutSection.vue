<script lang="ts" setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DesignerImg from "@components/DesignerImg.vue";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".about-item", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 50%",
      end: "center 50%",
      scrub: 1,
    },
    scale: 0,
    duration: 1,
  });
});
</script>

<template>
  <section id="about" class="padding about-container">
    <DesignerImg />
    <div class="max-w-none md:w-1/2 lg:max-w-xl text-center md:text-left">
      <h2>I’m Amy, and I’d love to work on your next project</h2>
      <p class="about-item">
        I love working with others to create beautiful design solutions. I’ve
        designed everything from brand illustrations to complete mobile apps.
        I’m also handy with a camera!
      </p>
      <button class="btn btn-red">Free Consultation</button>
    </div>
  </section>
</template>
