import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../components/Signin.vue';
import Signup from '../components/Signup.vue';
import Client from '../components/Client.vue';
import Agent  from '../components/Agent.vue';
import Tenders from '../components/Tenders.vue';
import Biding from '../components/Biding.vue'

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
    path:'/client',
    name:'client',
    component: Client
  },
  {
    path:'/home/agent',
    name:'agent',
    component: Agent
  },
  {
    path:'/home/tenders',
    name:'tenders',
    component: Tenders
  },
  {
    path:'/home/biding',
    name:'biding',
    component: Biding
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
