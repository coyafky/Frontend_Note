<!-- src/views/Login.vue -->
<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        // 简单的验证
        if (this.username === 'admin' && this.password === '123456') {
          localStorage.setItem('isAuthenticated', 'true')
          this.$router.push({ name: 'Home' })
        } else {
          alert('Invalid credentials')
        }
      }
    }
  }
  </script>