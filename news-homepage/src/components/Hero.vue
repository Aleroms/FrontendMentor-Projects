<template>
  <section class="hero">
    <img src="@/assets/image-web-3-mobile.jpg" alt="banner image" v-if="mobile" />
    <img src="@/assets/image-web-3-desktop.jpg" alt="banner image" v-else />
    <article class="hero-content">
      <h1>The Bright Future of Web 3.0?</h1>
      <div class="read-more">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>read more</button>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: ["mobile"],
};
</script>

<style></style>
