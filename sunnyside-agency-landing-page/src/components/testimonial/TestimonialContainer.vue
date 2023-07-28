<template>
  <div class="testimonials-container">
    <h3 class="testimonials-title fraunces">CLIENT TESTIMONIALS</h3>
    <div class="testimonial-card-container">
      <TestimonialCard
        v-for="testimonial in TESTIMONIALS_DATA"
        :key="testimonial.id"
        :imageURL="testimonial.imageUrl"
        :content="testimonial.content"
        :name="testimonial.name"
        :position="testimonial.position"
      />
    </div>
  </div>
</template>

<script setup>
import TESTIMONIALS_DATA from '/src/assets/data/testimonials.json'
import TestimonialCard from './TestimonialCard.vue'
</script>

<style lang="scss" scoped></style>
