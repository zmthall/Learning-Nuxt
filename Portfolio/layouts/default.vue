<template>
  <div class="container mx-auto max-w-4xl">
    <header class="flex justify-between items-center mt-5">
      <div class="flex items-center gap-12">
        <div>
          <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"
            >Zachary Thallas</NuxtLink
          >
        </div>
        <MenuComponent />
      </div>
      <ColorModeSelector />
    </header>

    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "DefaultLayout",
});

useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
body {
  font-family: "Roboto", system-ui, "Segoe UI", "Open Sans", "Helvetica Neue",
    sans-serif;
}

body {
  @apply bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300;
}
</style>
