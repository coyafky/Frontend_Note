<template>
    <button :class="{ active: isActive }">按钮</button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isActive: true
      }
    }
  }
  </script>
  