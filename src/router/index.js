import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../components/Signin.vue';
import Signup from '../components/Signup.vue';
import Client from '../components/Client.vue';
import Agent  from '../components/Agent.vue';
import Tenders from '../components/Tenders.vue';
import Biding from '../components/Biding.vue';
import Abouttender from '../components/Abouttender.vue';
import Createtender from '../components/Createtender.vue';
import Clienteditprofile from '../components/Clienteditprofile.vue';
import Tenderprogressclient from '../components/Tenderprogressclient.vue'
import Tenderprogressagent from '../components/Tenderprogressagent.vue';

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
    path:'/agent',
    name:'agent',
    component: Agent
  },
  {
    path:'/tenders',
    name:'tenders',
    component: Tenders
  },
  {
    path:'/biding',
    name:'biding',
    component: Biding
  },
  {
    path:'/Abouttender',
    name:'Abouttender',
    component:Abouttender
  },
  {
    path:'/Clienteditprofile',
    name:'Clienteditprofile',
    component:Clienteditprofile
  },
  {
    path:'/Createtender',
    name:'Createtender',
    component:Createtender
  },
  {
    path:'/client/tenderprogress',
    name:'Tenderprogressclient',
    component:Tenderprogressclient
  },
  {
    path:'/agent/tenderprogress',
    name:'Tenderprogressagent',
    component:Tenderprogressagent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
