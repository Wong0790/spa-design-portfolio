<script lang="ts" setup>
import {
  GraphicDesignIcon,
  UxUiIcon,
  AppsIcon,
  PhotographyIcon,
  IlustrationsIcon,
  MotionGraphicsIcon,
} from "@/components/Icons";
</script>

<template>
  <section id="skills" class="padding">
    <h1 class="mx-auto">Design solutions made easy</h1>
    <p>
      With over ten years of experience in various design disciplines, I’m your
      one-stop shop for your design needs.
    </p>
    <div class="skills-container">
      <div class="card row-span-2 col-span-2 max-h-96">
        <GraphicDesignIcon />
        <p>Graphic Design</p>
      </div>
      <div class="card min-h-44">
        <UxUiIcon />
        <p>UI/UX</p>
      </div>
      <div class="card min-h-44">
        <AppsIcon />
        <p>Apps</p>
      </div>
      <div class="card col-span-2">
        <PhotographyIcon />
        <p>Photography</p>
      </div>
      <div class="card col-span-2 max-h-40">
        <IlustrationsIcon />
        <p>Illustrations</p>
      </div>
      <div class="card col-span-2 max-h-40">
        <MotionGraphicsIcon />
        <p>Motion Graphics</p>
      </div>
    </div>
  </section>
</template>
