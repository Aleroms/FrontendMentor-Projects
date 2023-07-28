<script setup>
import { ref, onMounted, computed, onBeforeUnmount } from 'vue'
import HeaderDesktop from './components/header/HeaderDesktop.vue'
import HeaderMobile from './components/header/HeaderMobile.vue'
import CallToAction from './components/CallToAction.vue'
import Communication from './components/CommunicationArticle.vue'
import TestimonialContainer from './components/testimonial/TestimonialContainer.vue'
import GalleryStrip from './components/GalleryStrip.vue'
import FooterVue from './components/FooterVue.vue'

import CTA_DATA from './assets/data/call-to-action.json'
import COM_DATA from './assets/data/communication.json'

//window resizing stuff
const windowWidth = ref(window.innerWidth)

const isMobile = computed(() => {
  return windowWidth.value < 1000
})

const handleResize = () => {
  windowWidth.value = window.innerWidth
  console.log(windowWidth.value)
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header class="header" id="header">
    <HeaderDesktop v-if="!isMobile" />
    <HeaderMobile v-else />
  </header>
  <section id="call-to-action">
    <CallToAction
      v-for="(cta, index) in CTA_DATA"
      :key="cta.id"
      :title="cta.title"
      :content="cta.content"
      :desktopImageUrl="cta.desktopImageUrl"
      :mobileImageUrl="cta.mobileImageUrl"
      :alt="cta.alt"
      :switch="index"
    />
  </section>
  <section class="communication-section" v-if="!isMobile">
    <Communication
      v-for="(com, index) in COM_DATA"
      :key="com.id"
      :title="com.title"
      :content="com.content"
      :desktopImageUrl="com.desktopImageUrl"
      :mobileImageUrl="com.mobileImageUrl"
      :alt="com.alt"
      :style="{ backgroundImage: 'url(' + com.desktopImageUrl + ')' }"
      :switch="index"
    />
  </section>
  <section class="communication-section" v-else>
    <Communication
      v-for="(com, index) in COM_DATA"
      :key="com.id"
      :title="com.title"
      :content="com.content"
      :style="{ backgroundImage: 'url(' + com.mobileImageUrl + ')' }"
      :switch="index"
    />
  </section>
  <section class="testimonial-section">
    <TestimonialContainer />
  </section>
  <GalleryStrip />
  <FooterVue />
</template>

<style scoped></style>
