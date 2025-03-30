<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        :class="[
          'block transition-colors',
          { 'text-blue-600 font-semibold': link.id === activeId },
        ]"
        :style="{ marginLeft: `${level * 1}rem` }"
      >
        {{ link.text }}
      </NuxtLink>
      <TocLinks
        v-if="link.children?.length"
        :links="link.children"
        :level="level + 1"
        :active-id="activeId"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { TocLink } from "@nuxt/content";

withDefaults(
  defineProps<{
    links: TocLink[] | undefined;
    level?: number;
    activeId?: string | null;
  }>(),
  {
    level: 0,
    activeId: null,
  }
);

const route = useRoute();
</script>
