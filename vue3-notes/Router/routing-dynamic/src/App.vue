<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>User Details App</h1>
    <nav>
      <RouterLink to="/users/1">User 1</RouterLink>
      <RouterLink to="/users/2">User 2</RouterLink>
      <RouterLink to="/users/3">User 3</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<style>
nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #333;
}

nav a.router-link-active {
  font-weight: bold;
  color: #42b983;
}
</style>