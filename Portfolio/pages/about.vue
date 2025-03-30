<template>
  <div class="prose dark:prose-invert max-w-none">
    <ContentRenderer v-if="aboutPage" :value="aboutPage" />
  </div>
</template>

<script setup>
defineOptions({
  name: "AboutPage",
});

const { data: aboutPage } = await useAsyncData("about", () =>
  queryCollection("page")
    .path("/about") // ✅ don't include .md
    .first()
);

console.log(aboutPage.value);

// const { data: allPages } = await useAsyncData("debug", () =>
//   queryCollection("page").all()
// );

// console.log(allPages.value?.map((p) => p.path));

// definePageMeta({
//   layout: "another",
// });

// const enableCustomLayout = () => {
//   setPageLayout("another");
// };

useHead({
  title: "About Page",
});
</script>
