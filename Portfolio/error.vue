<template>
  <NuxtLayout>
    <section>
      <h1 class="text-4xl mb-4">Oops {{ error.statusCode }}</h1>
      <h2 text-xl text-gray-500 dark:text-gray-400>
        {{ error.statusMessage }}
      </h2>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();
</script>

<style></style>
