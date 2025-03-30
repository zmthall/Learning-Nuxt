<template>
  <div>
    <div>this page is about me</div>
    <div>
      <button @click="enableCustomLayout">Update Layout</button>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "AboutPage",
});

// definePageMeta({
//   layout: "another",
// });

const enableCustomLayout = () => {
  setPageLayout("another");
};

useHead({
  title: "About Page",
});
</script>
