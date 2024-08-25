<template>
    <nav>
      <ul>
        <li><router-link to="/settings/emails">Emails</router-link></li>
        <li><router-link to="/settings/profile">Profile</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>