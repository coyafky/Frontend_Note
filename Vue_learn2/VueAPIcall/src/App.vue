<template>
  <div>
    <h1>POST</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref,onMounted} from 'vue'

const posts = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    posts.value = data;
  } catch (error) {
    console.log("Error Fetching data");
  }
})

</script>

<style lang="scss" scoped>

</style>