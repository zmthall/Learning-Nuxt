<template>
  <nav class="font-mono">
    <ul class="flex flex-col md:flex-row gap-1 md:gap-4">
      <li>
        <NuxtLink to="/" class="link">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="link">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="link">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="link">Blog</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-700 text-2xl md:text-base;
}
</style>
