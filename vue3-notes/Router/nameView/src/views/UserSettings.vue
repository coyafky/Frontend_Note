<template>
    <div>
      <h1>User Settings</h1>
      <NavBar />
      <router-view />
      <router-view name="helper" />
    </div>
  </template>
  
  <script>
  import NavBar from './NavBar.vue'
  
  export default {
    name: 'UserSettings',
    components: {
      NavBar
    }
  }
  </script>