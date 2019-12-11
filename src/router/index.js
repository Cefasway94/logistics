import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../components/Signin.vue';
import Signup from '../components/Signup.vue';
import Client from '../components/Client.vue';

Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'login',
  },
  {
    path:'/signin',
    name:'signin',
    component: Signin
  },
  {
    path:'/signup',
    name:'signup',
    component: Signup
  },
  {
    path:'/dashboard/client',
    name:'client',
    component: Client
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
