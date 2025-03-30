<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :class="[{ 'ml-4': level }]"
        :to="{ path: route.path, hash: `#${link.id}` }"
        >{{ link.text }}</NuxtLink
      >
      <TocLinks :links="link.children" :level="level + 1" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { TocLink } from "@nuxt/content";

const route = useRoute();

withDefaults(
  defineProps<{
    links: TocLink[] | undefined;
    level?: number;
  }>(),
  {
    level: 0,
  }
);
</script>

<style></style>
