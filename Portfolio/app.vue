<template>
  <div class="">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s - Zachary Thallas",
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s, filter 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: grayscale(1);
}
</style>
