<template>
  <section>
    <ul>
      <li v-for="post in allBlogPosts" :key="post.path">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: "BlogsPage",
});

useHead({
  title: "All Blog Posts",
});

const { data: allBlogPosts } = await useAsyncData("blogs", () =>
  queryCollection("blog")
    .select("title", "description", "path")
    .where("path", "LIKE", "/blog/%")
    .all()
);
</script>

<style></style>
