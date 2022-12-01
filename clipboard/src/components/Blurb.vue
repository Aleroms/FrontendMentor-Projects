<template>
  <article class="blurb">
    <img v-show="icon !== undefined" :src="'/assets/images/'+ icon" alt="" aria-hidden="true" class="icon" />
    <h2 class="title" :style="{'font-size':font}">{{ title }}</h2>
    <p class="content">
      {{ content }}
    </p>
  </article>
</template>

<script>
export default {
  name: "Blurb",
  props: ["title", "content", "icon", "heading","font"],
};
</script>

<style lang="scss" scoped></style>
