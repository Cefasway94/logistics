import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../components/Signin.vue';
import Signup from '../components/Signup.vue';

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
