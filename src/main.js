import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use(CKEditor);

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
import AddGoalComponent from './components/AddGoalComponent.vue';
import GoalsComponent from './components/GoalsComponent.vue';
import EditGoalComponent from './components/EditGoalComponent.vue';
import AddEventComponent from './components/AddEventComponent.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent
  },
  {
    name: 'create',
    path: '/create',
    component: CreateComponent
  },
  {
    name: 'posts',
    path: '/posts',
    component: IndexComponent
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditComponent
  },
  {
    name: 'goals',
    path: '/goals',
    component: GoalsComponent
  },
  {
    name: 'add',
    path: '/add-goal',
    component: AddGoalComponent
  },
  {
    name: 'events',
    path: '/add-event',
    component: AddEventComponent
  },
  {
    name: 'edit-goal',
    path: '/edit-goal',
    component: EditGoalComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
