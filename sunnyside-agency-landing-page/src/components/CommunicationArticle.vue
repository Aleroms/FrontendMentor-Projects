<template>
  <article class="communication-container">
    <h3 class="fraunces" :class="props.switch % 2 == 0 ? 'color2' : 'color1'">{{ props.title }}</h3>
    <p class="barlow" :class="props.switch % 2 == 0 ? 'color2' : 'color1'">{{ props.content }}</p>
  </article>
</template>

<script setup>
const props = defineProps(['title', 'content', 'desktopImageURL', 'mobileImageURL', 'switch'])
</script>

<style lang="scss" scoped></style>
