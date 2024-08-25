import Vue from 'vue';
import Router from 'vue-router';

import BlogList from '../views/BlogList.vue';
import BlogPost from '../views/BlogPost.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogList',
      component: BlogList,
    },
    {
      path: '/post/:id',
      name: 'BlogPost',
      component: BlogPost,
    },
  ],
});