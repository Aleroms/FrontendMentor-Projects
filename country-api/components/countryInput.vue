<template>
  <div class="input-container">
    <div
      class="input-wrapper"
      :class="$colorMode.value === 'dark' ? 'dark' : 'light'"
    >
      <Icon name="material-symbols:search-rounded" />
      <input
        v-model="country"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
    <RegionSelect />
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
const textColor = computed(() => {
  return colorMode.value === "dark"
    ? "color: hsl(0, 0%, 100%)"
    : "hsl(200, 15%, 8%)";
});
const country = useState("country", () => "");
</script>

<style scoped lang="scss">
select {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem;
  border-right: 15px solid transparent;
  border-top: 0 solid transparent;
  border-left: 0 solid transparent;
  border-bottom: 0 solid transparent;
  border-radius: 5px;
  color: v-bind(textColor);

  &:focus {
    outline: none;
  }
}
.input-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.input-wrapper {
  max-width: 300px;
  padding: 0.625rem 0.225rem 0.625rem 1rem;
  border-radius: 5px;

  input {
    background-color: transparent;
    border: none;
    margin-left: 1rem;
    color: v-bind(textColor);

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: v-bind(textColor);
    }
  }
}
.dark {
  background-color: hsl(209, 23%, 22%);
  box-shadow: 0 0 3px hsl(200, 15%, 8%);
}
.light {
  background-color: #fff;
  box-shadow: 0 0 5px hsl(0, 0%, 82%);
}

@media (max-width: 500px) {
  .input-container {
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 10px;
  }
  .input-wrapper {
    width: 100%;
  }
}
</style>
