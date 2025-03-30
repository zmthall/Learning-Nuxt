<template>
  <section v-if="isSuccessful">
    <ul class="grid grid-cols-1 gap-4">
      <li
        v-for="repo in filteredRepos"
        :key="repo.id"
        class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono"
      >
        <a :href="repo.html_url" target="_blank" class="">
          <div class="flex items-start flex-col">
            <div class="font-semibold">
              {{ repo.name }}
            </div>
            <div>{{ repo.description }}</div>
          </div>
        </a>
      </li>
    </ul>
  </section>
  <section v-else-if="isError">Something went wrong... Try Again!</section>
  <section v-else>Loading...</section>
</template>

<script lang="ts" setup>
import type { GitHubRepo } from "../types/model.js";

const username = "zmthall";
const perPage = 100;
const topicToFilter = "portfolio-project";

const allRepos = ref<GitHubRepo[]>([]);
const isLoading = ref(true);
const isError = ref(false);

const filteredRepos = computed(() =>
  allRepos.value.filter((repo) => repo.topics?.includes(topicToFilter))
);

const isSuccessful = computed(() => !isLoading.value && !isError.value);

async function getRepoPageCount(): Promise<number> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=${perPage}`,
    {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json",
      },
    }
  );

  const link = res.headers.get("link");
  if (!link) return 1;

  const match = link.match(/&page=(\d+)>; rel="last"/);
  return match ? Number(match[1]) : 1;
}

async function fetchAllRepos() {
  try {
    const totalPages = await getRepoPageCount();

    for (let page = 1; page <= totalPages; page++) {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`,
        {
          headers: {
            Accept: "application/vnd.github.mercy-preview+json",
          },
        }
      );

      const pageRepos = await res.json();
      allRepos.value.push(...pageRepos);
    }

    isLoading.value = false;
  } catch (e) {
    console.error("Failed to fetch repos:", e);
    isError.value = true;
    isLoading.value = false;
  }
}

onMounted(async () => {
  await fetchAllRepos();
});
</script>

<style></style>
