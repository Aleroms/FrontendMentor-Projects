<template>
  <div class="call-to-action-container">
    <div class="cta-information-container" :class="props.switch % 2 == 0 ? '' : 'order-one'">
      <h3 class="fraunces">{{ props.title }}</h3>
      <p class="barlow">{{ props.content }}</p>
      <a href="#" class="fraunces cta-link">learn more</a>
    </div>
    <img :src="props.desktopImageUrl" :alt="props.alt" class="cta-picture" />
  </div>
</template>

<script setup>
const props = defineProps([
  'title',
  'content',
  'desktopImageUrl',
  'mobileImageUrl',
  'alt',
  'switch'
])
</script>

<style lang="scss" scoped></style>
