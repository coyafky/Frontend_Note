<!-- src/views/User.vue -->
<template>
    <div>
      <h1>User Profile</h1>
      <p>User ID: {{ $route.params.id }}</p>
      <router-link :to="{ name: 'Home' }">Go back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'User'
  }
  </script>