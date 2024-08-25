<!-- src/views/Search.vue -->
<template>
    <div>
      <h1>Search</h1>
      <p>Search Query: {{ $route.query.q }}</p>
      <router-link :to="{ name: 'Home' }">Go back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Search'
  }
  </script>