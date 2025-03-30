<template>
  <div class="flex gap-2 items-center">
    <div v-if="showNextModeLabel" class="text-gray-500 text-xs">
      Change to {{ nextMode }}
    </div>
    <button
      v-if="isMounted"
      class="color-mode-selector cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500"
      @click="toggleMode"
      @mouseenter="showOnEnter"
      @mouseleave="hideOnLeave"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { Mode } from "../types/model.js";
const showNextModeLabel = ref<boolean>(false);

const colorMode = useColorMode();

const modes = ["system", "light", "dark"];
const nextModeIcons: Record<Mode, string> = {
  system: "🌓",
  light: "🌕",
  dark: "🌑",
};

const isMounted = ref(false);
onMounted(() => (isMounted.value = true));

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference ?? "system");
  const nextModeIndex = (currentModeIndex + 1) % modes.length;

  return modes[nextModeIndex] ?? "system";
});

const showOnEnter = () => {
  showNextModeLabel.value = true;
};

const hideOnLeave = () => {
  showNextModeLabel.value = false;
};

const nextModeIcon = computed(() => {
  return nextModeIcons[nextMode.value as Mode];
});

const toggleMode = () => {
  colorMode.preference = nextMode.value;
};
</script>

<style></style>
