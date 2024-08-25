<template>
    <div>
      <h1>User: {{ $route.params.username }}</h1>
      <button @click="goToHome">Go to Home</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToHome() {
        this.$router.push({ name: 'Home' })
      }
    }
  }
  </script>