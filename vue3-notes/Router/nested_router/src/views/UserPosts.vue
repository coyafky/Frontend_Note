<!-- src/views/UserPosts.vue -->
<template>
    <div>
      <h3>User Posts</h3>
      <p>This is the posts page of User {{ $route.params.id }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserPosts'
  }
  </script>