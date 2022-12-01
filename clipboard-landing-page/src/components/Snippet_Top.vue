<template>
  <div class="snippet-top">
    <img
      :src="'/assets/images/' + snippet_main_image"
      alt="image computer"
      class="snippet-top-left"
      v-motion-fade-visible
    />
    <div class="snippet-top-right">
      <Blurb
        v-for="snip in snippet"
        :key="snip.title"
        :title="snip.title"
        :content="snip.content"
        :icon="snip.icon"
        :heading="snip.heading"
        :font="snip.font_sz"
        v-motion-slide-visible-right
      />
    </div>
  </div>
</template>

<script>
import Blurb from "./Blurb.vue";
export default {
  name: "Snipped-Top",
  props: ["snippet", "snippet_main_image"],
  components: {
    Blurb,
  },
};
</script>

<style lang="scss" scoped></style>
