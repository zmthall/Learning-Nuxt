<template>
  <div>ID: {{ route.params.id }}</div>
</template>

<script setup lang="ts">
defineOptions({
  name: "BlogPage",
});

const route = useRoute();

useHead({
  title: `Blog Post - ${route.params.id}`,
});
</script>

<style></style>
