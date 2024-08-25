<!-- src/views/Home.vue -->
<template>
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <router-link :to="{ name: 'UserProfile', params: { username: 'erina' } }">
        Go to Erina's Profile
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>