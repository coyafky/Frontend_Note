<!-- src/views/User.vue -->
<template>
    <div>
      <h1>User Details</h1>
      <p>User ID: {{ $route.params.id }}</p>
      <!-- 这里可以根据用户 ID 获取并显示用户信息 -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'User',
    watch: {
      '$route.params.id'(newId, oldId) {
        // 对路由参数变化做出响应
        this.fetchUser(newId);
      }
    },
    methods: {
      fetchUser(userId) {
        // 模拟获取用户信息
        console.log(`Fetching user with ID: ${userId}`);
      }
    },
    mounted() {
      // 初始加载时获取用户信息
      this.fetchUser(this.$route.params.id);
    }
  }
  </script>