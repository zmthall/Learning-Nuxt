<template>
  <div class="prose dark:prose-invert max-w-none">
    <ContentRenderer v-if="projectList" :value="projectList" />
  </div>
</template>

<script setup>
defineOptions({
  name: "Projects",
});

const { data: projectList } = await useAsyncData("project-list", () =>
  queryCollection("page")
    .path("/project-list") // ✅ don't include .md
    .first()
);

useHead({
  title: "Project Page",
});
</script>
