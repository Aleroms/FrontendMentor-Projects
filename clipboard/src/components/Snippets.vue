<template>
  <div class="snippet">
    <div v-for="(snip, index) in snippet">
      <img
        :src="'/assets/images/'+snippet_main_image"
        v-show="index === image_position"
        alt=""
        aria-hidden="true"
      />
      <Blurb
        :key="snip.title"
        :title="snip.title"
        :content="snip.content"
        :icon="snip.icon"
        :heading="snip.heading"
        :font="snip.font_sz"
      />
      
    </div>
    
  </div>
</template>

<script>
import Blurb from "./Blurb.vue";
export default {
  name: "Snippets",
  components: {
    Blurb,
  },
  props: ["snippet", "snippet_main_image", "image_position"],
};
</script>

<style></style>
