<template>
  <main class="card">
    <h1 class="advice">advice #{{ id }}</h1>
    <h2 class="quote">
      <q>{{ advice }}</q>
    </h2>
    <img src="/images/pattern-divider-desktop.svg" alt="divider" class="divider" />
    <button @click="generateNewAdvice" class="btn">
      <img src="/images/icon-dice.svg" aria-hidden="true" />
    </button>
  </main>
</template>

<script>
export default {
  name: 'AdviceCard',
  props: ['id', 'advice'],
  emits: ['advice-change'],
  methods: {
    generateNewAdvice() {
      //console.log('submitted')
      this.$emit('advice-change')
    }
  }
}
</script>

<style lang="scss" scoped></style>
