<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
enum Region {
  AFRICA,
  AMERICA,
  ASIA,
  EUROPE,
  OCEANIA,
}
// const country = useState("country");
// console.log(country.value);

useSeoMeta({
  title: "REST Countries API",
  description: "project on using REST to get country data.",
  ogTitle: "REST Countries API",
  ogDescription: "project on using REST to get country data.",
  ogImage: "/images/ogImage.jpg",
  ogUrl: "/images/ogImage.jpg",
  twitterTitle: "REST Countries API",
  twitterDescription: "project on using REST to get country data.",
  twitterImage: "/images/ogImage.jpg",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/ico",
      href: "/favicon.ico",
    },
  ],
});
</script>

<style>
body {
  margin: 0;
  padding: 0;

  background-color: hsl(0, 0%, 98%);
  color: hsl(200, 15%, 8%);
}
.dark-mode body {
  background-color: hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
}
@media (max-width: 500px) {
  h1 {
    font-size: 14px;
  }
}
.dark-mode a {
  color: hsl(0, 0%, 100%);
  text-decoration: none;
}
a {
  color: hsl(200, 15%, 8%);
  text-decoration: none;
}
.text-light {
  color: lightgray;
}
.text-dark {
  color: gray;
}
</style>
