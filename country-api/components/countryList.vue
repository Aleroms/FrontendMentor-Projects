<template>
  <div class="country-list">
    <CountryDetails v-for="d in country" :details="d" :key="d.cca3" />
  </div>
</template>

<script lang="ts" setup>
import type { Country } from "~~/types";
const props = defineProps({
  country: {
    type: Object as () => Country[],
    required: true,
  },
});
</script>

<style scoped lang="scss">
.country-list {
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 50px;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
}
@media (max-width: 725px) {
  .country-list {
    row-gap: 10px;
    column-gap: 10px;
  }
}
</style>
