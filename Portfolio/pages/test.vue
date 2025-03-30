<script setup>
const route = useRoute();
</script>

<template>
  <div>
    <NuxtLink
      :to="{ path: '/test', hash: '#target' }"
      class="underline text-blue-500"
    >
      Scroll to Target
    </NuxtLink>

    <div style="height: 1000px" />

    <h2 id="target" class="text-2xl font-bold">Scroll Target</h2>
  </div>
</template>
