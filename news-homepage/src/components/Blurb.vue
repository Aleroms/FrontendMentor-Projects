<template>
  <article class="blurb">
    <h3>{{ title }}</h3>
    <p class="content">{{ content }}</p>
  </article>
</template>

<script>
export default {
  name: "Blurb",
  props: ["title", "content"],
};
</script>

<style></style>
