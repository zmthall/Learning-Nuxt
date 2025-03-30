<template>
  <div>
    <h2 class="text-2xl font-semibold mb-10">Projects</h2>
    <ProjectList />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "ProjectsPage",
});

useSeoMeta({
  title: "Projects Page",
  description: "This is the projects page",
});

useHead({
  title: "Projects Page",
});
</script>

<style></style>
