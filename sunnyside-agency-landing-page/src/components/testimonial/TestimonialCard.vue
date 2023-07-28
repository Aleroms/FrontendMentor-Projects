<template>
  <div class="testimonial-card">
    <img :src="props.imageURL" :alt="props.name" class="testimonial-image" />
    <p>{{ props.content }}</p>
    <div class="card-position">
      <h3 class="fraunces">{{ props.name }}</h3>
      <h4>{{ props.position }}</h4>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['imageURL', 'content', 'name', 'position'])
</script>

<style lang="scss" scoped></style>
