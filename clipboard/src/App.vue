<script>
import Heading from "./components/Heading.vue";
import Snippets from "./components/Snippets.vue";
import Sponsor from "./components/Sponsor.vue";
import Blurb from "./components/Blurb.vue";
import Buttons from "./components/Buttons.vue";
import Footer from "./components/Footer.vue";
import Snippet_Top from "./components/Snippet_Top.vue";
import Snippet_Bottom from "./components/Snippet_Bot.vue";
export default {
  name: "App",
  components: {
    Heading,
    Snippets,
    Sponsor,
    Blurb,
    Buttons,
    Footer,
    Snippet_Top,
    Snippet_Bottom,
  },
  data() {
    return {
      snippet_one_text: [
        {
          title: "Quick Search",
          content:
            "Easily search your snippets by content, category, web address, application, and more.",
          icon: "",
        },
        {
          title: "iCloud Sync",
          content:
            "Instantly saves and syncs snippets across all your devices.",
          icon: "",
        },
        {
          title: "Complete History",
          content:
            "Retrieve any snippets from the first moment you started using the app.",
          icon: "",
        },
      ],
      snippet_one_main_image: "image-computer.png",
      snippet_bot1: [
        {
          title: "Access Clipboard Anywhere",
          content:
            "Whether you're on the go, or at your computer, you can access al your Clipboard snippets in a few simple clicks.",
          icon: "",
          font_sz: "28px",
        },
        {
          title: "Supercharge your workflow",
          content: "We’ve got the tools to boost your productivity.",
          icon: "",
        },
      ],
      snippet_bot2: [
        {
          title: "Create blacklists",
          content:
            "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
          icon: "icon-blacklist.svg",
        },
        {
          title: "Plain text snippets",
          content:
            "Remove unwanted formatting from copied text for a consistent look.",
          icon: "icon-text.svg",
        },
        {
          title: "Sneak preview",
          content:
            "Quick preview of all snippets on your Clipboard for easy access.",
          icon: "icon-preview.svg",
        },
      ],
      snippet_two_main_image: "image-devices.png",
    };
  },
};
</script>

<template>
  <Heading />
  <main class="container">
    <Blurb
      title="Keep track of your snippets"
      content="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."
      font="28px"
      class="top-blurb"
    />
    <Snippet_Top
      :snippet="snippet_one_text"
      :snippet_main_image="snippet_one_main_image"
    />

    <Snippet_Bottom
      :snippet_main_image="snippet_two_main_image"
      :bot_container1="snippet_bot1"
      :bot_container2="snippet_bot2"
    />

    <Sponsor />
    <Blurb
      title="Clipboard for iOS and Mac OS"
      content="Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
  and you’re ready to start adding to your clipboard."
      font="28px"
      class="top-blurb"
      v-motion-slide-visible-top
    />
    <Buttons v-motion-slide-visible-bottom />
  </main>
  <Footer />
</template>

<style lang="scss"></style>
