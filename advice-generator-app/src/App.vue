<script>
import axios from 'axios'
import AdviceCard from '@/components/AdviceCard.vue'
export default {
  name: 'App',
  components: { AdviceCard },
  methods: {
    async getData() {
      try {
        const response = await axios.get('https://api.adviceslip.com/advice')
        this.title = response.data.slip.id
        this.content = response.data.slip.advice
      } catch (error) {
        console.log(error)
      }
    }
  },
  data() {
    return {
      title: '',
      content: ''
    }
  },
  created() {
    this.getData()
  }
}
</script>

<template>
  <div>
    <AdviceCard :id="title" :advice="content" @advice-change="getData" />
  </div>
</template>

<style scoped lang="sass"></style>
