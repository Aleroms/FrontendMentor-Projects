<template>
  <NuxtLink :to="`/country/${details?.cca3}`">
    <div class="card" :class="$colorMode.value === 'light' ? 'light' : 'dark'">
      <NuxtImg
        :src="details?.flags.svg"
        width="300"
        height="200"
        :alt="details?.flags.alt"
        class="card-image"
        format="webp"
      />
      <article class="card-details">
        <p class="card-title">
          <strong>{{ details?.name.official }}</strong>
        </p>
        <p style="text-decoration: none">
          <strong>Population</strong>:
          <span
            :class="$colorMode.value === 'dark' ? 'text-light' : 'text-dark'"
            >{{ details?.population }}</span
          >
        </p>
        <p>
          <strong>Region</strong>: <span>{{ details?.region }}</span>
        </p>
        <p>
          <strong>Capital</strong>:
          <span v-for="cap in details?.capital">{{ cap }}</span>
        </p>
      </article>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { Country } from "~~/types";
const props = defineProps({
  details: {
    type: Object as () => Country,
  },
});
</script>

<style scoped lang="scss">
.card {
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: rotate(-2deg);
  }
}
.card-image {
  border-radius: 5px 5px 0 0;
  object-fit: cover;
}
.card-details {
  padding: 0.635rem;
}

.dark {
  background-color: hsl(209, 23%, 22%);
  box-shadow: 5px 5px 5px hsla(200, 15%, 8%, 0.186);
}
.light {
  background-color: #fff;
  box-shadow: 5px 5px 5px hsla(0, 0%, 82%, 0.211);
}
</style>
