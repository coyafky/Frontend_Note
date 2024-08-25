<!-- src/views/Home.vue -->
<template>
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <router-link :to="{ name: 'User', params: { id: 123 } }">Go to User 123</router-link>
      <br />
      <router-link :to="{ path: '/search/coya' }">Search for "cota"</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>