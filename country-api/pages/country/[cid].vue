<template>
  <NuxtLink
    to="/"
    class="btn btn-home"
    :class="$colorMode.value === 'dark' ? 'btn-dark' : 'btn-light'"
    ><Icon name="material-symbols:arrow-left-alt" /> back</NuxtLink
  >
  <div v-if="data" class="country-container">
    <div class="flag-wrapper">
      <NuxtImg :src="data[0].flags.svg" class="flag" />
    </div>
    <article>
      <h1 class="country-name">{{ data[0].name.common }}</h1>
      <div class="text-container">
        <div>
          <p>
            <strong>Native Name:</strong>
            <!-- {{ data[0].name.nativeName.ell.common }} -->
            [Not Sure]
          </p>
          <p><strong>Population:</strong> {{ data[0].population }}</p>
          <p><strong>Region:</strong> {{ data[0].region }}</p>
          <p><strong>Sub Region:</strong> {{ data[0].subregion }}</p>
          <p><strong>Capital:</strong> {{ multipleItems(data[0].capital) }}</p>
        </div>
        <div>
          <p>
            <strong>Top Level Domain:</strong> {{ multipleItems(data[0].tld) }}
          </p>
          <p>
            <strong>Currencies:</strong>
            {{ multipleObjects(data[0].currencies) }}
          </p>
          <p>
            <strong>Languages:</strong>
            <!-- {{ data[0].languages }} -->[Not Sure]
          </p>
        </div>
      </div>
      <div>
        <p><strong>Border Countries:</strong></p>
        <p v-if="!data[0].borders">no border countries. Probably an island</p>
        <div class="borders" v-else>
          <NuxtLink
            v-for="border in data[0].borders"
            :key="border"
            :to="border"
            class="btn"
            :class="$colorMode.value === 'dark' ? 'btn-dark' : 'btn-light'"
            >{{ border }}</NuxtLink
          >
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import type { Country } from "~~/types";
const route = useRoute();
const { data } = await useAsyncData<Country[]>("country", () =>
  $fetch(`https://restcountries.com/v3.1/alpha/${route.params.cid}`)
);

function multipleItems(item: Array<string>) {
  return item.length === 1 ? item[0] : item.join(", ");
}
function multipleObjects(item: object) {
  const items: Array<string> = [];
  Object.entries(item).forEach(([key, currency]) => {
    items.push(currency.name);
  });
  return items.join(", ");
}
</script>

<style scoped lang="scss">
.btn {
  background-color: transparent;
  padding: 0.525rem 1.225rem;
  margin-right: 1rem;
  border-radius: 3px;
  text-transform: capitalize;
  border: none;
  display: inline-block;
  box-shadow: 5px 5px 5px hsla(200, 15%, 8%, 0.186);
  cursor: pointer;
}

.btn-dark {
  background-color: hsl(209, 23%, 22%);
  box-shadow: 0 0 3px hsl(200, 15%, 8%);
}
.btn-light {
  background-color: #fff;
  box-shadow: 0 0 5px hsl(0, 0%, 82%);
}
.btn-home {
  margin: 2rem;
}

.flag-wrapper {
  max-width: 600px;
  margin: 2.625rem 0;

  img {
    width: 100%;
  }
}
.country-container {
  margin: 2rem;
}
.country-name {
  font-size: 30px;
  font-weight: bold;
}
.text-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
}
.borders {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
}
@media (min-width: 500px) {
  .text-container {
    flex-direction: row;
    justify-content: space-between;
  }
}
@media (min-width: 1000px) {
  .country-container {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
}
</style>
