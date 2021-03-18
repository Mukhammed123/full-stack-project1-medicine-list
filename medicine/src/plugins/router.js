import Vue from 'vue';
import VueRouter from 'vue-router';

import PostsComponent from '@/components/SheetsComponent';
import EditComponent from '@/components/EditComponent';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PostsComponent,
  },
  {
    path: '/edit',
    name: 'edit',
    component: EditComponent,
  },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});