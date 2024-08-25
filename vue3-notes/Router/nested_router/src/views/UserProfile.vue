<!-- src/views/UserProfile.vue -->
<template>
    <div>
      <h3>User Profile</h3>
      <p>This is the profile page of User {{ $route.params.id }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile'
  }
  </script>