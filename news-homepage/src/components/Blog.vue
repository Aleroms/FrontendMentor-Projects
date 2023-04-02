<template>
  <section class="blog">
    <div class="post" v-for="(post, index) in posts">
      <div class="post-left">
        <img :src="post.image" :alt="post.alt" />
      </div>
      <div class="post-right">
        <h3 class="post-index">0{{ index + 1 }}</h3>
        <Blurb :title="post.title" :content="post.content" />
      </div>
    </div>
  </section>
</template>

<script>
import Blurb from "./Blurb.vue";
export default {
  name: "Blog",
  components: {
    Blurb,
  },
  data() {
    return {
      posts: [
        {
          title: "Reviving Retro PCs",
          content: "What happens when old PCs are given modern upgrades?",
          image: "@/assets/image-retro-pcs.jpg",
          alt: "reviving retro pc image",
        },
        {
          title: "Top 10 Laptops of 2023",
          content: "Our best picks for various needs and budgets.",
          image: "@/assets/image-top-laptops.jpg",
          alt: "top 10 laptops of 2023",
        },
        {
          title: "The Growth of Gaming",
          content: "How the pandemic has sparked fresh opportunities.",
          image: "@/assets/image-gaming-growth.jpg",
          alt: "the growth of gaming",
        },
      ],
    };
  },
};
</script>

<style></style>
