<template>
  <div class="prose dark:prose-invert max-w-none">
    <ContentRenderer v-if="aboutPage" :value="aboutPage" />
  </div>
</template>

<script setup>
defineOptions({
  name: "AboutPage",
});

const { data: aboutPage } = await useAsyncData("about", () =>
  queryCollection("page")
    .path("/about") // ✅ don't include .md
    .first()
);

useHead({
  title: "About Page",
});
</script>
