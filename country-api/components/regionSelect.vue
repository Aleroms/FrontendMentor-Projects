<template>
  <div
    class="mode-toggler"
    @click="toggleDDM"
    ref="target"
    :class="$colorMode.value === 'dark' ? 'dark' : 'light'"
  >
    <span>{{ !region ? "Filter by Region " : region }}</span>
    <Icon :name="modeToggleIcon" />
    <Transition name="fade" mode="out-in">
      <div
        class="select-toggle"
        v-if="selectToggle"
        :class="$colorMode.value === 'light' ? 'toggle-light' : 'toggle-dark'"
      >
        <div class="select-item" @click="onSelectRegion('all')">All</div>
        <div class="select-item" @click="onSelectRegion('Africa')">Africa</div>
        <div class="select-item" @click="onSelectRegion('Americas')">
          America
        </div>
        <div class="select-item" @click="onSelectRegion('Asia')">Asia</div>
        <div class="select-item" @click="onSelectRegion('Europe')">Europe</div>
        <div class="select-item" @click="onSelectRegion('Oceania')">
          Oceania
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";
import type { Country } from "~~/types";

const colorMode = useColorMode();
const selectToggle = ref(false);
const target = ref(null);
const region = useState("region", () => "");
const countriesArray = useState<Country[]>("countriesArray");

onClickOutside(target, () => (selectToggle.value = false));

const modes = {
  dark: {
    system: "material-symbols:settings-rounded",
    dark: "material-symbols:dark-mode-rounded",
    light: "material-symbols:light-mode-rounded",
  },
  light: {
    system: "material-symbols:settings-outline",
    dark: "material-symbols:dark-mode-outline-rounded",
    light: "material-symbols:light-mode-outline-rounded",
  },
};

const toCapitalize = (str: string) =>
  str.charAt(0).toLocaleUpperCase() + str.slice(1);

const toggleDDM = () => (selectToggle.value = !selectToggle.value);
const onSelectRegion = (id: string) => {
  region.value = id;
};

const modeToggleIcon = computed(() => {
  return !selectToggle.value
    ? "material-symbols:keyboard-arrow-down-rounded"
    : "material-symbols:keyboard-arrow-up";
});
const hoverColor = computed(() => {
  return colorMode.value === "dark" ? "lightgray" : "dimgray";
});
</script>

<style lang="scss" scoped>
.dark {
  background-color: hsl(209, 23%, 22%);
  box-shadow: 0 0 3px hsl(200, 15%, 8%);
}
.light {
  background-color: #fff;
  box-shadow: 0 0 5px hsl(0, 0%, 82%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.select-toggle {
  position: absolute;
  top: 55px;
  left: 0;
  padding: 0.325rem 1rem;
  border-radius: 5px;
  z-index: 1;
}
.toggle-dark {
  background-color: hsl(209, 23%, 22%);
  border: 1px solid hsl(200, 15%, 8%);
  box-shadow: 1px 2px 5px hsl(200, 15%, 8%);
}
.toggle-light {
  background-color: hsl(0, 0%, 98%);
  border: 1px solid hsl(0, 0%, 82%);
}
.select-item {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 0.625rem;

  &:hover {
    color: v-bind(hoverColor);
  }
}

.mode-toggler {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem;
  border-radius: 5px;
  gap: 17px;
  cursor: pointer;
}
</style>
