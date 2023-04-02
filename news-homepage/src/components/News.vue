<template>
  <section class="news">
    <h2 class="news-title">New</h2>
    <div v-for="(news, index) in newsInfo">
      <Blurb :title="news.title" :content="news.content" />
      <hr v-if="index < newsInfo.length - 1" />
    </div>
  </section>
</template>

<script>
import Blurb from "@/components/Blurb.vue";
export default {
  name: "News",
  components: { Blurb },
  data() {
    return {
      newsInfo: [
        {
          title: "Hydrogen VS Electric Cars",
          content: "Will hydrogen-fueled cars ever catch up to EVs?",
        },
        {
          title: "The Downsides of AI Artistry",
          content:
            "What are the possible adverse effects of on-demand AI image generation?",
        },
        {
          title: "Is VC Funding Drying Up?",
          content:
            "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
        },
      ],
    };
  },
};
</script>

<style></style>
