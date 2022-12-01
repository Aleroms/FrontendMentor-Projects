<template>
  <div class="snippet_bot">
    <div class="container-top">
      <Blurb
        :title="bot_container1[0].title"
        :content="bot_container1[0].content"
        class="top-blurb"
        v-motion-pop-visible-once
      />
      <img
        :src="'/assets/images/' + snippet_main_image"
        alt=""
        aria-hidden="true"
        class="snip_main_img"
        v-motion-fade-visible
      />
      <Blurb
        :title="bot_container1[1].title"
        :content="bot_container1[1].content"
        class="top-blurb"
        v-motion-pop-visible-once
      />
    </div>
    <div class="container_bot">
        <Blurb v-for="snips in bot_container2"
        :title="snips.title"
        :content="snips.content"
        :icon="snips.icon"
        font="28px"
        class="bot-item"/>
    </div>
  </div>
</template>

<script>
import Blurb from "./Blurb.vue";
export default {
  name: "Snippet-Bottom",
  props: ["bot_container1", "snippet_main_image", "bot_container2"],
  components: { Blurb },
};
</script>

<style></style>
