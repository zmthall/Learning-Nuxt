<template>
  <div class="prose dark:prose-invert max-w-none">
    <ContentRenderer v-if="homePage" :value="homePage" />
  </div>
</template>

<script setup>
defineOptions({
  name: "HomePage",
});

const { data: homePage } = await useAsyncData("home", () =>
  queryCollection("page")
    .path("/") // ✅ don't include .md
    .first()
);

useHead({
  title: "Home Page",
});
</script>
