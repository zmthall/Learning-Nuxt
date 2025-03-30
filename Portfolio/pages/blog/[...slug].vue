<script setup lang="ts">
const route = useRoute();

const activeId = ref<string | null>(null);

onMounted(() => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
        break;
      }
    }
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  });

  // setTimeout(() => {
  const elements = document.querySelectorAll("h2, h3");
  const observed = new Set<Element>();

  elements.forEach((el) => {
    if (!observed.has(el)) {
      observer.observe(el);
      observed.add(el);
    }
  });
  // }, 150);

  onBeforeUnmount(() => {
    observer.disconnect(); // 🔥 disconnects all observers on component unmount
  });
});

// Step 1: Resolve the correct path
const resolvedPath = `/blog/${
  Array.isArray(route.params.slug)
    ? route.params.slug.join("/")
    : route.params.slug ?? "index"
}`;

// Step 2: Fetch the content
const { data: post } = await useAsyncData(resolvedPath, () =>
  queryCollection("blog").path(resolvedPath).first()
);

// Step 3: Build <head> from content
useHead(() => {
  const title = post.value?.title ?? "Blog";
  const description = post.value?.description ?? "";
  const meta = post.value?.head?.meta ?? [];
  const lang = post.value?.lang ?? "en";
  const icon = post.value?.icon ?? "/favicon.ico";
  const ogImage = post.value?.ogImage ?? "/default-og.jpg";
  const twitterImage = post.value?.twitterImage ?? ogImage;
  const url = `https://yourdomain.com${route.fullPath}`;

  return {
    title,
    htmlAttrs: {
      lang,
    },
    meta: [
      { name: "description", content: description },
      ...meta,
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: twitterImage },
    ],
    link: [
      { rel: "icon", href: icon },
      { rel: "canonical", href: url },
    ],
  };
});
</script>

<template>
  <div
    class="prose dark:prose-invert prose-pre:bg-gray-200 dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300 max-w-none prose-img:w-[90%] prose-h1:w-full prose-headings:mt-0"
  >
    <div class="grid grid-cols-6 gap-16">
      <div
        :class="[
          { 'col-span-6 md:col-span-4': post?.toc },
          { 'col-span-6': !post?.toc },
        ]"
      >
        <ContentRenderer v-if="post" :value="post" />
      </div>
      <div v-if="post?.toc" class="hidden md:col-span-2 md:block not-prose">
        <aside class="sticky top-8">
          <div class="font-semibold mb-2">Table of Contents</div>
          <nav>
            <TocLinks :active-id="activeId" :links="post?.body?.toc?.links" />
          </nav>
        </aside>
      </div>
    </div>
  </div>
</template>
