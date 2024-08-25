<template>
    <div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: {},
      };
    },
    beforeRouteEnter(to, from, next) {
      // 模拟异步获取数据
      setTimeout(() => {
        const posts = [
          { id: 1, title: 'First Post', content: 'This is the first post.' },
          { id: 2, title: 'Second Post', content: 'This is the second post.' },
        ];
        const post = posts.find(p => p.id === Number(to.params.id));
        next(vm => {
          vm.post = post;
        });
      }, 1000);
    },
    beforeRouteUpdate(to, from, next) {
      // 模拟异步获取数据
      setTimeout(() => {
        const posts = [
          { id: 1, title: 'First Post', content: 'This is the first post.' },
          { id: 2, title: 'Second Post', content: 'This is the second post.' },
        ];
        this.post = posts.find(p => p.id === Number(to.params.id));
        next();
      }, 1000);
    },
    beforeRouteLeave(to, from, next) {
      const answer = window.confirm('Do you really want to leave?');
      if (answer) {
        next();
      } else {
        next(false);
      }
    },
  };
  </script>