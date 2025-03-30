<template>
  <section class="not-prose font-mono">
    <div class="column text-gray-400 text-sm">
      <div>date</div>
      <div>title</div>
    </div>
    <ul>
      <li v-for="post in allBlogPosts" :key="post.path">
        <NuxtLink
          :to="post.path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800 group"
        >
          <div
            :class="[
              {
                'text-gray-400 dark:text-gray-500': post.displayYear,
                'text-white dark:text-gray-900 group-hover:text-gray-100 dark:group-hover:text-gray-800 pointer-events-none select-none':
                  !post.displayYear,
              },
            ]"
          >
            {{ post.publishYear }}
          </div>
          <div>
            {{ post.title }}
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: "BlogsPage",
});

useHead({
  title: "All Blog Posts",
});

const { data } = await useAsyncData("blogs", () =>
  queryCollection("blog")
    .select(
      "title",
      "description",
      "path",
      "publishedAt",
      "displayYear",
      "publishYear"
    )
    .where("path", "LIKE", "/blog/%")
    .order("publishedAt", "DESC")
    .all()
);

const allBlogPosts = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];
  let lastYear = null;

  for (const post of data.value) {
    if (typeof post.publishedAt === "string") {
      const year = new Date(post.publishedAt).getFullYear();

      const displayYear = year !== lastYear;
      post.displayYear = displayYear;
      post.publishYear = year;

      result.push(post);
      lastYear = year;
    } else return [];
  }

  return result;
});

console.log(allBlogPosts.value);
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
