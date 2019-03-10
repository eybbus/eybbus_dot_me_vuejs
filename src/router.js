import Vue from 'vue';
import Router from 'vue-router';
import MyWork from './views/MyWork.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/profession'
    },
    {
      path: '/profession',
      name: 'profession',
      component: MyWork
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/AboutMe.vue')
    }
  ]
});
