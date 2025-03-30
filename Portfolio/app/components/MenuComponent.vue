<template>
  <nav class="font-mono">
    <ul class="flex gap-4">
      <li>
        <NuxtLink to="/" class="link">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="link">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="link">Projects</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200;
}
</style>
