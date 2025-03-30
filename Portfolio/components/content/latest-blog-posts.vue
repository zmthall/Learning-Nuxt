<template>
  <BlogPosts v-slot="{ posts }" :limit="limitValue">
    <div v-for="post in posts" :key="post.id">
      <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
    </div>
  </BlogPosts>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    limit?: number | string | null;
  }>(),
  {
    limit: null,
  }
);

const limitValue = computed(() =>
  props.limit !== null ? Number(props.limit) : null
);
</script>

<style></style>
