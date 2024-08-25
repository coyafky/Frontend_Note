<!-- src/views/UserProfile.vue -->
<template>
    <div>
      <h1>User Profile</h1>
      <p>Username: {{ $route.params.username }}</p>
      <router-link :to="{ name: 'Home' }">Go back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile'
  }
  </script>