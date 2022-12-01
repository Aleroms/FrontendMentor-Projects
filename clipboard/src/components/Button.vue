<template>
  <button class="btn-style">Download for {{ os }}</button>
</template>

<script>
import { toHandlers } from "vue";

export default {
  name: "Button",
  props: ["color", "os"],

};
</script>

<style lang="scss" scoped>

</style>
