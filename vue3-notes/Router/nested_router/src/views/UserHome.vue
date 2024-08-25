<!-- src/views/UserHome.vue -->
<template>
    <div>
      <h3>User Home</h3>
      <p>Welcome to the home page of User {{ $route.params.id }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserHome'
  }
  </script>