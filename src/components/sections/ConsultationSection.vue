<script lang="ts" setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from("#consultation", {
    scale: 0,
    duration: 1,
  });
});
</script>

<template>
  <section id="consultation" class="padding consultation-container">
    <div class="consultation-card">
      <div>
        <h2>Book a call with me</h2>
        <p>
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </p>
      </div>
      <button class="btn btn-red">Free Consultation</button>
    </div>
  </section>
</template>
