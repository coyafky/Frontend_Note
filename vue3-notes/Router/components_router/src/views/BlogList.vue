<template>
    <div>
      <h1>Blog Posts</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [
          { id: 1, title: 'First Post', content: 'This is the first post.' },
          { id: 2, title: 'Second Post', content: 'This is the second post.' },
        ],
      };
    },
  };
  </script>