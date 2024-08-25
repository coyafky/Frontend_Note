<!-- src/views/Home.vue -->
<template>
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    methods: {
      logout() {
        localStorage.removeItem('isAuthenticated')
        this.$router.push({ name: 'Login' })
      }
    }
  }
  </script>