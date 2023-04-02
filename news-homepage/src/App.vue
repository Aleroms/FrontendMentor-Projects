<script>
import HeaderMobile from "@/components/HeaderMobile.vue";
import HeaderDesktop from "@/components/HeaderDesktop.vue";
import Hero from "@/components/Hero.vue";
import News from "@/components/News.vue";
import Blog from "@/components/Blog.vue";

export default {
  name: "App",
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  components: {
    HeaderMobile,
    HeaderDesktop,
    Hero,
    News,
    Blog,
  },
  data() {
    return {
      mobile: true,
      windowWidth: window.innerHeight,
    };
  },
  computed: {
    isMobile() {
      this.mobile = this.windowWidth < 1000;
      return this.mobile;
    },
  },
};
</script>

<template>
  <HeaderDesktop v-if="!isMobile" />
  <HeaderMobile v-else />
  <section class="main">
    <Hero :isMobile="mobile" />
    <News />
  </section>
  <Blog />
</template>

<style></style>
