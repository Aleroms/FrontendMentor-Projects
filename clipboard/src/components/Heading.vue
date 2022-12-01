<template>
  <header>
    <section class="hero">
      <img
        v-motion-slide-top
        src="/assets/images/logo.svg"
        alt="clipboard logo"
        class="logo"
      />
      <h1 v-motion-slide-bottom>
        A history of everything you copy
      </h1>
      <p v-motion-slide-bottom>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <Buttons v-motion-slide-bottom />
    </section>
  </header>
</template>

<script>
import Buttons from "./Buttons.vue";

export default {
  name: "Heading",
  components: {
    Buttons,
  },
};
</script>

<style lang="scss" scoped></style>
