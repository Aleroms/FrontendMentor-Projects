<template>
  <div class="mode-toggler" @click="toggleDDM" ref="target">
    <Icon :name="modeToggleIcon" />
    <span>
      {{ toCapitalize($colorMode.value) }}
      Mode
    </span>
    <Transition name="fade" mode="out-in">
      <div
        class="select-toggle"
        v-if="selectToggle"
        :class="$colorMode.value === 'light' ? 'toggle-light' : 'toggle-dark'"
      >
        <div class="select-item" @click="onSelect('system')">
          <Icon
            :name="
              $colorMode.value === 'light'
                ? modes.light.system
                : modes.dark.system
            "
          />
          <span>System</span>
        </div>
        <div class="select-item" @click="onSelect('light')">
          <Icon
            :name="
              $colorMode.value === 'light'
                ? modes.light.light
                : modes.dark.light
            "
          />
          <span>Light</span>
        </div>
        <div class="select-item" @click="onSelect('dark')">
          <Icon
            :name="
              $colorMode.value === 'light' ? modes.light.dark : modes.dark.dark
            "
          />
          <span>Dark</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";

const colorMode = useColorMode();
const selectToggle = ref(false);
const target = ref(null);

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
const onSelect = (id: string) => (colorMode.preference = id);

const modeToggleIcon = computed(() => {
  return colorMode.value === "dark" ? modes.dark.dark : modes.light.light;
});
const hoverColor = computed(() => {
  return colorMode.value === "dark" ? "lightgray" : "dimgray";
});
</script>

<style lang="scss">
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
  top: 25px;
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
  justify-content: center;
  gap: 7px;
  cursor: pointer;
}
</style>
