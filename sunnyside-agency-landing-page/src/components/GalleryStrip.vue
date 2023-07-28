<template>
  <div class="gallery-container">
    <img
      v-for="gallery in GALLERY_DATA"
      :src="gallery.desktopUrl"
      :alt="gallery.alt"
      :key="gallery.id"
    />
  </div>
</template>

<script setup>
import GALLERY_DATA from '../assets/data/gallery.json'
</script>

<style lang="scss" scoped></style>
