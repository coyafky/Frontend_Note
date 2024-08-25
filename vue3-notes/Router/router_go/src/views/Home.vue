<template>
    <div>
      <h1>Home</h1>
      <button @click="goToAbout">Go to About</button>
      <button @click="goToUser('eduardo')">Go to User</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToAbout() {
        this.$router.push({ name: 'About' })
      },
      goToUser(username) {
        this.$router.push({ name: 'User', params: { username } })
      }
    }
  }
  </script>