<template>
  <div class="countries-container">
    <CountryInput />
    <CountryList :country="countriesProp" />
  </div>
</template>

<script lang="ts" setup>
import type { Country } from "~~/types";

const countriesArray = useState<Country[]>("countriesArray");
const region = useState("region");
const countriesProp = computed(() => {
  return region.value === "all" || !region.value
    ? countriesArray.value
    : countriesArray.value.filter((country) => country.region === region.value);
});
await callOnce(async () => {
  //https://restcountries.com/v3.1/all
  countriesArray.value = await $fetch("https://restcountries.com/v3.1/all");
});
</script>

<style lang="scss" scoped>
.countries-container {
  margin: 1rem;
  padding: 1rem;
}
</style>
