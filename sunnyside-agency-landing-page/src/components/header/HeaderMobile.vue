<template>
  <div class="navbar">
    <img src="/images/logo.svg" alt="sunnyside" />
    <img
      src="/images/icons/hamburger.svg"
      alt="hamburger menu"
      class="hamburger-menu"
      @click="myFunction"
    />
  </div>
  <div v-if="toggleNavbar" class="navbar-container">
    <span class="triangle"></span>
    <NavBar />
  </div>
  <div class="hero">
    <h1 class="fraunces hero-title">we are creatives</h1>
    <img class="arrow" src="/images/icons/arrow-down.svg" alt="icon arrow down" />
  </div>
</template>

<script setup>
import NavBar from '../navigation/NavBar.vue'
import { ref } from 'vue'
const toggleNavbar = ref(false)
const myFunction = () => {
  console.log('myFunc')
  toggleNavbar.value = !toggleNavbar.value
}
</script>

<style lang="scss" scoped></style>
